import React, { useState } from 'react'
import { BiSearch,BiCartAlt } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'

import { Link } from 'react-scroll'

import './NavbarStyles.css'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
        <div name='home' className={nav ? 'navbar_voyagers navbar-bg1' : 'navbar_voyagers'}>
            <div className={nav ? 'logo_dark' : 'logo'}>
                <image src="%PUBLIC_URL%/logo.png"></image>
                {/* <div>Voyagers</div> */}
            </div>
            <ul className="nav-menu1">
                <NavLink to='/' smooth={true} duration={500} ><div className='navbar_links'> <li>Home</li> </div></NavLink>
                <NavLink to='/cities' smooth={true} duration={500} > <div className='navbar_links'> <li>Destinations</li> </div> </NavLink>
                <NavLink to='/shop' smooth={true} duration={500} > <div className='navbar_links'>  <li>Shop</li> </div></NavLink>
                <NavLink to='/travelPackages' smooth={true} duration={500} > <div className='navbar_links'> <li>Package</li> </div> </NavLink>
                
                <NavLink to='blogs' smooth={true} duration={500}> <div className='navbar_links'> <li>Blogs</li> </div></NavLink>
            </ul>
            <div className="nav-icons">
            <NavLink to="/cart" > <BiCartAlt className='icon' style={{marginRight:'1rem'}}  /></NavLink>
                <BiSearch className='icon' style={{ marginRight: '1rem' }} />
                <NavLink to='/login' smooth={true} duration={500} >

                    <BsPerson className='icon' />
                    </NavLink>
            </div>
            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose style={{ color: '#000' }} className='icon' />)}

            </div>

            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav">
                <Link to='home' smooth={true} duration={500} ><li>Home</li></Link>
                <Link to='destinations' smooth={true} duration={500} ><li>Destinations</li></Link>
                <Link to='carousel' smooth={true} duration={500} ><li>Travel</li></Link>
                <Link to='search' smooth={true} duration={500} ><li>Book</li></Link>
                <Link to='views' smooth={true} duration={500} ><li>Views</li></Link>
                </ul>
                <div className="mobile-menu-bottom">
                    <div className="menu-icons">
                        <button>Search</button>
                        <button>Account</button>
                    </div>
                    <div className="social-icons">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaPinterest className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
