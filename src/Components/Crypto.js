import React, { useEffect, useState } from 'react'
import './Crypto.css';
import { Input} from 'antd';

export default function Crypto() {

    let [apiData, setApiData] = useState([])
    let [search, setSearch] = useState('')
    const { Search } = Input;

    function fetchApiData() {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
            .then(res => res.json())
            .then(data => {
                setApiData(data)
            })
    }
    const filterData = apiData.filter((val) =>{
        return val.name.toLowerCase().includes(search.toLowerCase())
    })
     

    useEffect(() => {
        fetchApiData()
    }, [])

    return (
        <div className='container'>
            <h1>Crytpo World</h1>
            {/* <input type ="Text" onChange={(e) =>setSearch(e.target.value)}placeholder='search here......'/> */}
            <Search placeholder="input search text" onChange={(e) =>setSearch(e.target.value)} style={{ width: 250 }} />
            <div className = 'd-flex flex-wrap justify-content-around'>
            {
                filterData.map((coin) => {
                    return (
                        <div className="cardcrypto" style={{"width": "18rem","backgroundColor":"black", "color": "white"}}>
                            <img src={coin.image} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">NAME:-{coin.name}</h5>
                                    <a href="#" className="btn btn-primary">PRICE:-{coin.current_price}</a>
                                </div>
                        </div>
                    )
                })
            }
            </div>
         
        </div>
    )
}
