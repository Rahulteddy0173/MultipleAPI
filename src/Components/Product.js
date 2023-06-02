import React, { useEffect, useState } from 'react'
import './Product.css';
import { Input} from 'antd';

 function Product() {
    let [apiData, setApiData] = useState([])
    let [search, setSearch] = useState('')
    const { Search } = Input;

    
    function fetchApiData() {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setApiData(data)
            })
    }
    const filterData = apiData.filter((val) =>{
        return val.title.toLowerCase().includes(search.toLowerCase())
    })

    useEffect(() => {
        fetchApiData()
    }, [])

    return (
        <div>
        <h1>product World</h1>
        {/* <input type ='Text' onChange={(e) =>setSearch(e.target.value)}placeholder='search here.....'/> */}
        <Search placeholder="input search text" onChange={(e) =>setSearch(e.target.value)} style={{ width: 250 }} />
        <div className='d-flex flex-wrap justify-content-center'>
        {
            filterData.map((product) => {
                return (
                    <div className="card1" style={{"width": "18rem"}}>
                        <img src={product.image} className="card-img-top1"/>
                            <div className="card-body">
                                <h6 className="card-title">{product.title}</h6><h5><span>⭐{product.rating.rate}</span></h5>
                                <a href="#" className="btn btn-primary">PRICE:-{product.price}</a>
                            </div>
                    </div>
                )
            })
        }
        </div>
     
    </div>
    )
}

export default Product