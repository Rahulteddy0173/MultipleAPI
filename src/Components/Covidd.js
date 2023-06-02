import React, { useEffect, useState } from 'react'
import covidimg from '../assests/images/covid.gif'
import './Covidd.css';
import { Input} from 'antd';

export default function Covidd() {

    let [apiData, setApiData] = useState([])
    let [search, setSearch] = useState('')
    const { Search } = Input;

    function fetchApiData() {
        fetch('https://api.rootnet.in/covid19-in/stats/latest')
            .then(res => res.json())
            .then(data => {
                console.log(data.data.regional,'this is covid data')
                setApiData(data.data.regional)
            })
    }
    const filterData = apiData.filter((val) =>{
        return val.loc.toLowerCase().includes(search.toLowerCase())
    })

    useEffect(() => {
        fetchApiData()
    }, [])

    return (
        <div>
            <h1>Covid</h1>
            {/* <input type = 'Text' onChange={(e) =>setSearch(e.target.value)}placeholder='search here.....'/> */}
               <Search placeholder="input search text" onChange={(e) =>setSearch(e.target.value)} style={{ width: 250}} />
            <div className='d-flex flex-wrap justify-content-center'>
            {
                filterData.map((covid) => {
                    return (
                        <div className="card" style={{"width": "18rem"}}>
                            <img src={covidimg} className="card-img-top2" />
                                <div className="card-body">
                                    <h5 className="card-title">NAME:-{covid.loc}</h5>
                                    <a href="#" className="btn btn-success">Covid Confirmed:-{covid.totalConfirmed}</a><br></br>
                                    <a href="#" className="btn btn-warning">Covid Discharged:-{covid.discharged}</a>
                                    <a href="#" className="btn btn-danger">Covid Deaths:-{covid.deaths}</a>

                                </div>
                        </div>
                    )
                })
            }
            </div>
         
        </div>
    )
}