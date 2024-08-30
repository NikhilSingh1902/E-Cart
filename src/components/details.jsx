import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './data'
import Product from './product'

const details = () => {
    const {id}=useParams()
    const[product,setProduct]=useState({})
    useEffect(()=>{
        const filterproduct=items.filter((product)=>product.id==id)
        // console.log(filterproduct)
       setProduct(filterproduct[0])
    },[id])
  return (
    <>
    <div className="container">
        <div className="img">
            <img src={product.imgsrc} alt="" />
        </div>
        <div>
          <h2>
                     <h5 className="card-title">{product.title}</h5>
                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card content.</p>
                       <button className='btn btn-primary mx-3'>Rs{product.price}</button>
                       <button 
                        onClick={()=>addToCart(product.id,product.price,product.title,product.imgsrc)}
                       className='btn btn-warning'>Add To Cart</button>
          </h2>
        </div>
        </div></>
  )
}

export default details
