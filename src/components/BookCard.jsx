import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import Favorite from './Favorite';
//import google font


function BookCard({ books,headline }) {
  const[change,setChange]=useState(false)
  return (
    <div  style={{position:"relative"}}  className='my-16 px-4 lg:px-20'>
        <h2 className='text-5xl text-center font-bold text-black my-5' style={{fontFamily:"PT Sans , sans-serif",fontWeight:"400"}} >{headline}</h2>
        <div  className='mt-12 w-full border-2 border-gray-200 p-10 rounded-md'>
        <Swiper
        slidesPerView={1}
        spaceBetween={-400}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        
        {
            books.map(book => <SwiperSlide key={book._id} >
                
                  <div  style={{height:"230px",width:"200px"}} >
                    <div className='relative' >
                    
                    <Link to={`/book/${book._id}`} >  <img style={{width:"150px",position:"static"}} src={book.img} alt="" /></Link>
                    
                    </div>
                    <div>
                        <div  style={{display:"flex",justifyContent:"space-between"}}>
                          <div>
                          <h3 style={{position:"static"}} className='text-sm text-black-600'>{book.name}</h3>
                            <p className='text-gray-600' >Author:{book.author}</p>

                          </div>
                          
                            
                        </div>
                    </div>
                    </div>
                    <div style={{background:"none",height:"70px",display:"flex",alignItems:"baseline"}}>

                    </div>
                      

            </SwiperSlide>)
        }
      </Swiper>
        </div>
    </div>
  )
}

export default BookCard