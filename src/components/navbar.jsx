import React from 'react'
import { Link } from 'react-router-dom'
// import { items } from './data'

const navbar = (setData,cart) => {
  return (
    <>
    <header className='sticky-top'>
        <div className="navbar">
            <Link to ={'/'}className="brand">HOME</Link>
            <div className="searchbar">
                <input type='text' placeholder='Search Products'/>
            </div>
            <Link to ={'/cart'} className='cart'>
            <button type="button" className="btn btn-primary position-relative">Cart</button>
            </Link>
            <Link to ={'/'}className="brand">Log out</Link>
        </div>

        <div className="filter">
            <div className="items">FASHION</div>
            <div className="items">MOBILES</div>
            <div className="items">TV/LAPTOP</div>
            <div className="items">BEAUTY</div>
            <div className="items">TOYS</div>
            <div className="items">APPLIANCES</div>
            <div className="items">MEDICINES</div>
            <div className="items">BOOKS</div>
        </div>
    </header>
    </>
  )
}

export default navbar
