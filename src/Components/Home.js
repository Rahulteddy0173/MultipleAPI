import React from 'react'
import { useNavigate } from 'react-router-dom'
import cryptoimg from '../assests/images/cryptocurrency.jpg'
import covidimg from '../assests/images/covidimg.jpg'
import productimg from '../assests/images/productimg.jpg'
import './home.css';

export default function Home() {
  const naviagte = useNavigate()
  return (
    <div>
      <h2>Welcome To Different API's Stores</h2>
      <div className='img-container'>
        <img src={cryptoimg} className='crypto-card-img' onClick={() => naviagte('/crypto')}crypto />
        <img src={productimg} className='crypto-card-img' onClick={() => naviagte('/products')}product />
        <img src={covidimg} className='crypto-card-img' onClick={() => naviagte('/covid')}covid />
      </div>
      <div className='img-names'>
        <h3 onClick={() => naviagte('/crypto')}>CRYPTO</h3>
        <h3 onClick={() => naviagte('/products')}>PRODUCTS</h3>
        <h3 onClick={() => naviagte('/covid')}>COVID</h3>
        </div>
    </div>
  )
}
