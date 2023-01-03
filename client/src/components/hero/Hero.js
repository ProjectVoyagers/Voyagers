import React from 'react'
import './HeroStyles.css'
import {AiOutlineSearch} from 'react-icons/ai'

import Video from '../../Assets/maldivesVideo.mp4'

const Hero = (props) => {
    return (
        <div className='voyagers_hero'>
            <video autoPlay loop muted id='video1'>
                <source src={Video} type='video/mp4' />
            </video>
            <div className="overlay1"></div>
            <div className="content1">
                <h1 style={{color:'white'}}>Travel anywhere you want, anytime!!</h1>
                <h2 style={{color:'white'}}>Top Locations Worldwide</h2>
                <form className="form1">
                    <div>
                        <input type="text" placeholder='Search Destinations' />
                    </div>
                    <div>
                        <button className='searchButton'><AiOutlineSearch className='icon'/></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero
