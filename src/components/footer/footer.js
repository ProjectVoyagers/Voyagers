import React from 'react'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import styles from './footer.module.css'


function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <h3>Voyagers</h3>
                    <div className={styles.social}>
                        <FaFacebook className={styles.icon} />
                        <FaInstagram className={styles.icon} />
                        <FaTwitter className={styles.icon} />
                        <FaPinterest className={styles.icon} />
                        <FaYoutube className={styles.icon} />
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.left}>
                        <ul>
                            <li>About</li>
                            <li>Partnerships</li>
                            <li>Careers</li>
                            <li>Newsroom</li>
                            <li>Advertising</li>
                        </ul>
                    </div>
                    <div className={styles.right}>
                        <ul>
                            <li>Contact</li>
                            <li>Terms</li>
                            <li>Policy</li>
                            <li>Privacy</li>
                            <li>Pricing</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer