import React from 'react'
import styles from './Footer.module.css'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footcontainer}>
                    <div className={styles.column}>
                    <h2 className={styles.logo}>Thikss<span>Restro</span></h2>
                    <p>Our platform sells one of the best food items made with unique chefs for unique items which will mak you tempting everybite,"Fresh,Fast deliver at your door step,Spicy and Delicious"</p>
                </div>
                <div className={styles.column}>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/offer">Offers</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h3>Reach Us</h3>
                    <p>Email: thikssrestro@gmail.com</p>
                    <p>Phone:626387263</p>
                    <p>Address: 12/A XYZ</p>
                </div>
                <div class={styles.column}>
                    <h3>Follow Us </h3>
                    <div className={styles.icons}>
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaTwitter /></a>
                    </div>
                </div >
                <div className={styles.btm}>
                    <p>&copy; xyz. All Rights Reserved</p>
                </div>
                </div>
            </footer >
        </>
    )
}

export default Footer