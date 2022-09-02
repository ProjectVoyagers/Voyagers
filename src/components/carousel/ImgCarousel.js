import React from 'react'
import styles from './ImgCarouselStyles.css'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Home1 from '../../Assets/home-bg-1.jpg'
import Home2 from '../../Assets/home-bg-1.jpg'
import Home3 from '../../Assets/home-bg-1.jpg'

function ImgCarousel() {
    return (
        <div name='carousel' className={styles.container}>
            <Carousel className={styles.Carousel} showArrows={true} autoPlay={false} infiniteLoop={true} >
                <div>
                    <img src={Home1} alt='/' />
                    {/* <p className="legend">Maldives 1</p> */}
                </div>
                <div>
                    <img src={Home2} alt='/' />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={Home3} alt='/' />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        </div>


    )
}

export default ImgCarousel
