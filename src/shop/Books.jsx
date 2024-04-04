import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Favorite from '../components/Favorite'

function Books() {
const [data,setData]=useState([])
const [query,setQuery]=useState([])
const [btnBook,setBtnBook]=useState(true)
const [btnAuthor,setBtnAuthor]=useState(false)
const [btnGenre,setBtnGenre]=useState(false)

useEffect(()=>{
  fetch("https://book-review-backend-1.onrender.com/bookdetails").then(res=> res.json()).then(data=> setData(data))
},[])
function handleLove(){
  axios.get('https://book-review-backend-1.onrender.com/bookdetails/genre/Love').then(res => { setData(res.data) }

).catch(console.error)

}
function handleThriller(){
  console.log("hey")
  axios.get('https://book-review-backend-1.onrender.com/bookdetails/genre/thriller').then(res => { setData(res.data) }


).catch(console.error)

}

  return (
    <div className='pt-20 '>
      <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",padding:"5px"}} >
      <div style={{display:"flex",alignItems:"center",justifyContent:"center"}} >
      <input type="search" name="search" id="search" placeholder='search a book ..' style={{boxShadow:"0px 0px 1px 0.5px gray"}} className='py-2 px-5 rounded-s-sm' onChange={(e) => setQuery(e.target.value)} />
      <div style={{height:"42px"}} class="btn-group" role="group" aria-label="Basic example">
  <button style={{borderTopLeftRadius:"0",borderBottomLeftRadius:"0",backgroundColor:`${btnBook?"blue":""}`}} type="button" className="btn btn-secondary" onClick={()=>{setBtnAuthor(false) 
    setBtnGenre(false)
    setBtnBook(true)}} >Book</button>
  <button style={{backgroundColor:`${btnAuthor?"blue":""}`}} type="button" className="btn btn-secondary" onClick={()=>{setBtnAuthor(true) 
    setBtnGenre(false)
    setBtnBook(false)}} >Author</button>
  <button style={{backgroundColor:`${btnGenre?"blue":""}`}} type="button" className="btn btn-secondary" onClick={()=>{setBtnAuthor(false) 
    setBtnGenre(true)
    setBtnBook(false)}} >genre</button>
</div>
      </div>

        <div style={{width:"25%"}} >
        {btnAuthor?(<div style={{backgroundColor:"white",width:"260px",margin:"0",position:"fixed"}} >
              {query.length>0?(<ul>
                {data.filter((book)=> book.author.toLowerCase().includes(query)).map((user)=>(
                   <Link to={`/book/${user._id}`} ><li className='hover:bg-blue-200'>{user.name},{user.author}</li>
                   </Link>
                ))}
              </ul>):null}
            </div>):null}
            {btnBook?(<div style={{backgroundColor:"white",width:"260px",margin:"0",position:"fixed"}} >
              {query.length>0?(<ul>
                {data.filter((book)=> book.name.toLowerCase().includes(query)).map((user)=>(
                   <Link to={`/book/${user._id}`} ><li className='hover:bg-blue-200'>{user.name}</li>
                   </Link>
                ))}
              </ul>):null}
            </div>):null}
            {btnGenre?(<div style={{backgroundColor:"white",width:"260px",margin:"0",position:"fixed"}} >
              {query.length>0?(<ul>
                {data.filter((book)=> book.genre.toLowerCase().includes(query)).map((user)=>(
                   <Link to={`/book/${user._id}`} ><li className='hover:bg-blue-200'>{user.name},{user.genre}</li>
                   </Link>
                ))}
              </ul>):null}
            </div>):null}
        </div>

      </div>
      <div style={{paddingLeft:"10px",display:"flex",flexDirection:"row"}} >
        <h2 style={{border:"solid gray 1px",padding:"5px",width:"fit-content",borderRadius:"5px",margin:"8px"  }} >Recommended</h2>
        <h2 style={{border:"solid red 1px",padding:"5px",width:"fit-content",borderRadius:"5px",margin:"8px",color:"red",cursor:'pointer'}} className='hover:bg-red-200' onClick={handleLove} >Love</h2>
        <h2 style={{border:"solid green 1px",padding:"5px",width:"fit-content",borderRadius:"5px",margin:"8px",color:"green",cursor:'pointer'}} className='hover:bg-green-200' onClick={handleThriller} >Thriller</h2>
      </div>
      <div style={{paddingLeft:"10%",paddingRight:"10%"}} >
        <div style={{backgroundColor:"white"}} >
           {data.map((item)=>(
                    <Link to={`/book/${item._id}`} >
                    <div key={item._id} className="card mb-3" style={{width:"70%",position:"static"}}>
                    <div className="row g-0">
                      <div className="col-md-2">
                        <img src={item.img} className="img-fluid rounded-start" alt="..."/>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{item.name}</h5>
                          <p className="card-text">Author:{item.author}</p>
                          <p className="card-text"><small className="text-body-secondary">{item.genre}</small></p>
                        </div>
                      </div>
                      <div style={{position:"static"}} className="col-md-2">
                        <Favorite/>
                      </div>
                    </div>
                  </div>
                  </Link>
           ))} 
        </div>
      </div>
    </div>
  )
}

export default Books