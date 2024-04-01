import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import { GiSecretBook } from "react-icons/gi";
import { Link as Linkk, animateScroll as scroll } from 'react-scroll';
function NavBar() {
    const [isMenuOpen, setMenuOpen] =useState(false);
    const [isSticky,setIsSticky] = useState(false)

    //toggle
    const toggleMenu = ()=>{
        setMenuOpen(!isMenuOpen)
    }
    useEffect(()=>{
        const handleScroll =()=>{
            if(window.scrollY>50){
                setIsSticky(true)
            }
            else{
                setIsSticky(false)
            }
        }
        window.addEventListener("scroll",handleScroll);
        return ()=>{
            window.addEventListener("scroll",handleScroll);
        }
    }, [])

    // Nav items
    const navItems =[
        {link: "Home", path:"/"},
        {link: "Books", path:"/books"},
    ]
  return (
    <header style={{zIndex:"4"}} className='w-full bg-green-100 fixed top-0 left-0 right-0 transtition-all ease-in duration-300'>
        <nav className={`py-4 lg:px-24 px-4 ${isSticky? "sticky top-0 left-0 right-0 bg-blue-300":""}`}>
            <div className='flex justify-between items-center text-base gap-8'>
                <Link to="/" className='text-2xl font-bold text-blue-700 flex items-center gap-2'><GiSecretBook className='inline-block'/>Bookie</Link>
            
            <ul className='md:flex space-x-12 hidden' >
                {
                    navItems.map(({link,path})=> <Link  key={path} to={path} className='block text-base font-semibold text-gray uppercase curser-pointer hover:text-blue-500 hover:scale-110 transition-all' >{link}</Link>)
                }
        <li><Linkk to="contactus" smooth={true} duration={500} className='block text-base font-semibold text-gray uppercase curser-pointer hover:text-blue-500 hover:scale-110 transition-all'>CONTACT US</Linkk></li>
            </ul>
            <div className='space-x-12 hidden lg:flex items-center'>
                <button><FaBarsStaggered className='lg:hidden w-5 hover:text-blue-700' /></button>
            </div>
            <div className='md:hidden'>
                <button onClick={toggleMenu} className='text-black focus:outline-none' >
                    {
                        isMenuOpen?<FaXmark className=' h-5 w-5 text-red' />:<FaBarsStaggered className='h-5 w-5 text-black'/>
                    }
                </button>
            </div>
            </div>
            {/* navitems for small devices */}
            <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen? "block fixed top-0 right-0 left-0":"hidden "} `}>
            {
                    navItems.map(({link,path})=> <Link key={path} to={path} className='block text-base text-white uppercase curser-pointer hover:text-blue-700' >{link}</Link>)
                }
            </div>
        </nav>
    </header>
  )
}

export default NavBar