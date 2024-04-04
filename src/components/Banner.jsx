import React, { useEffect, useState } from 'react'
import { redirect,Link } from 'react-router-dom'
import Woman from '../image/woman.png'
import bookspng from '../image/bookspng.png'

function Banner() {
  const [query,setQuery]=useState("")
  const [books,setBooks]=useState([])
  useEffect(()=>{
      fetch("https://book-review-backend-1.onrender.com/bookdetails").then(res=> res.json()).then(data=> setBooks(data.slice(0, 7)))
  },[])
  function handleClick(id) {
    return redirect(`/book/${id}`)

  }
  return (
    <div className='px-4 lg:px-24 bg-green-100 flex items-center'>
        <div  className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            <div  className='md:w-1/2 space-y-0 h-full'>
                <h2 className='text-5xl font-bold leading-snug text-black'>"Have books ‘happened’ to you?</h2>
                <p  className=' ml-5 md:w-4/5'>Unless your answer to that question is ‘yes,’ I’m unsure how to talk to you."</p>
                <p style={{textAlign:"end"}} className=' ml-5 md:w-4/5'> – Haruki Murakami</p>
                <div  >
                <input type="search" name="search" id="search" placeholder='search a book ..' className='py-2 px-4 mt-2 ml-5 rounded-s-sm outline-none' onChange={(e)=> setQuery(e.target.value)}/>
                <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 '>Search</button>
                </div>
            <div style={{backgroundColor:"white",width:"230px",margin:"0",marginLeft:"20px"}} >
              {query.length>0?(<ul>
                {books.filter((book)=> book.name.toLowerCase().includes(query)).map((user)=>(
                   <Link to={`/book/${user._id}`} ><li className='hover:bg-blue-200'>{user.name}</li>
                   </Link>
                ))}
              </ul>):null}
            </div>
            </div>
            <div style={{display:"flex",flexDirection:"row",alignItems:"end"}} >
                <img  style={{height:"250px"}} src={Woman} alt="" />  <img  style={{height:"150px",marginBottom:"10px"}} src={bookspng} alt="" />

            </div>
            
        </div>
    </div>
  )
}

export default Banner