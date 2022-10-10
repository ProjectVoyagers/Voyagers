import { Fragment } from "react";

import About from '../../Assets/about-img.jpg';
import styles from './about.module.css';

const about = (props) => {
    return(
        <Fragment>
            <section className={styles.about} id="about">

                <div className={styles.image}>
                    <img src={About} alt="" />
                </div>

                <div className={styles.content}>
                    <h3>About us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque voluptates corrupti natus necessitatibus beatae voluptatibus, deserunt quo soluta minima libero laborum, corporis error esse vitae placeat blanditiis reiciendis vel? Minima.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dicta doloremque placeat porro, ipsam quia at beatae atque odit iste?</p>
                    <a href="#home" className={styles.btn}>read more</a>
                </div>

            </section>
        </Fragment>
    )
}

export default about;