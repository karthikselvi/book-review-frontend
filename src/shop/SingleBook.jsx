import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Review from '../components/Reiew';

function SingleBook() {
    const {_id, name,img,author,genre }= useLoaderData();
  return (
    <div>
    <div className='mt-28 px-4 lg:px-24 flex flex-row align-center '>
        <div>
        <img  src={img} alt="" />
        </div>
        <div className='ml-5'>
          <h2 style={{fontSize:"70px",color:'black'}}>{name}</h2>
          <h3 style={{fontSize:"20px",color:'black'}}>Author: {author}</h3>
          <h3 style={{fontSize:"20px",color:'black'}} >Genre: {genre}</h3>
        </div>
    </div>
    <div style={{padding:"10px"}} >
    <Review id={_id} />
    </div>
    </div>
  )
}

export default SingleBook