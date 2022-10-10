import { Fragment } from "react"
import styles from './categories.module.css'

import Category1 from '../../Assets/category-1.jpg'
import Category2 from '../../Assets/category-2.jpg'
import Category3 from '../../Assets/category-3.jpg'
import Category4 from '../../Assets/category-4.jpg'

const Categories = (props) => {
    return(
    <Fragment>
        <section className={styles.category}>
            <h1>Adventure idea!</h1>

        <div className={styles['box-container']}>

            <div className={styles.box}>
                <img src={Category1} alt="" />
                <h3>bungee jump</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, id.</p>
                <a href="#home" className={styles.btn}>read more</a>
            </div>

            <div className={styles.box}>
                <img src={Category2} alt="" />
                <h3>zip lines</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, id.</p>
                <a href="#about" className={styles.btn}>read more</a>
            </div>

            <div className={styles.box}>
                <img src={Category3} alt="" />
                <h3>Canoeing</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, id.</p>
                <a href="#packages" className={styles.btn}>read more</a>
            </div>

            <div className={styles.box}>
                <img src={Category4} alt="" />
                <h3>kayaking</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, id.</p>
                <a href="#blogs" className={styles.btn}>read more</a>
            </div>

        </div>
        </section>
    </Fragment>
    )
}

export default Categories;