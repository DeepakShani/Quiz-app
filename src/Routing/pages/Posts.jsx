import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom'
import './post.css'

const Posts = () => {
    const [product, setProduct]=useState([])
    // console(product)
    useEffect(()=>{
        fetch('/Gadget.json').then((data)=>{
            return data.json()
        }).then((data)=>{
            setProduct(data)
        })
    },[])
  return (
    <div className='container'>
      {
        product.map((ele)=>{
            return <div className='post' key={ele.id}>
                    <img src={ele.image} alt={`Gadget${ele.title}`} />
                    <h1>{ele.title}</h1>
                    <span>{ele.price}</span>
                </div>
        })
      }
    </div>
  )
}

export default Posts
