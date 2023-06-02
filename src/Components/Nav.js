import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
export default function Nav() {
  return (
    <>
        <ul className='navContainer'>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/crypto'>Crypto</Link>
            </li>
            <li>
              <Link to='/products'>Product</Link>
            </li>
            <li>
              <Link to='/covid'>Covid</Link>
            </li>
        </ul>
        
    </>
  )
}
