import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const Post = () => {
    const[postData,setPostData]=useState([])
    useEffect(()=>{
        setTimeout(()=>{
            fetch('https://jsonplaceholder.typicode.com/posts').then((data)=>{return data.json}).then((data)=>{
                setPostData(data)
            })
        },2000);
    },[])
  return (
    postData.lenght?<div>
      {
        postData.map((post)=>{
            return <div key={post.id}>
                <Link to={`/post/${postData.id}`}>{postData.title}</Link>
            </div>
        })
      }
    </div>:<p>loading...</p>
  )
}

export default Post
