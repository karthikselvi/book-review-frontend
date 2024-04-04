import React, { useEffect, useState } from 'react'
import BookCard from '../components/BookCard'

function FavoriteBooks() {
    const [books,setBooks]=useState([])
    const [books2,setBooks2]=useState([])
    useEffect(()=>{
        fetch("https://book-review-backend-1.onrender.com/bookdetails").then(res=> res.json()).then(data=> setBooks(data.slice(0, 7)))
        fetch("https://book-review-backend-1.onrender.com/bookdetails").then(res=> res.json()).then(data=> setBooks2(data.slice(8, 16)))
    },[])
  return (
    <div style={{position:"static"}}>
        <BookCard  books={books}  headline="TOP SELLING"/>
        <BookCard books={books2}  headline="RECOMMENDED"/>
    </div>
  )
}

export default FavoriteBooks