import React, { useContext } from 'react'
import { useState } from 'react';
// import cheflogo from '../../assets/cheflogo.jpg';
import mylogo from '../../assets/mylogo.png';
import styles from './Navbarr.module.css';
import { IoBagAddOutline } from "react-icons/io5";
import { RiUserAddLine } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import { Fooditems } from '../Providerr/Providerr';

const Navbarr = () => {
    const nav = useNavigate();
    const [active, setactive] = useState("");
    const { count, setcount, search, setsearch } = useContext(Fooditems);
    const handlesearch = (e) => {
        setsearch(e.target.value);
    }
    return (
        <>
            <marquee direction="left" behvaiour="scroll" style={{ color: "#f10b0b", fontSize: "20px" }}>Welcome to ThikssRestro Have your dish...We provide combo offers and also discount of 10% for every regular customers</marquee>
            <div className={styles.navbar}>

                <div className={styles.navleft}>
                    <div className={styles.logo}>
                        <img src={mylogo} alt="chef image" />
                        <span>ThikssRestro</span>
                    </div>
                    <div className={styles.navmenulist}>
                        <ul>
                            <Link to="/"><li className={active === "home" ? "active" : "styles.notactive"} onClick={() => { setactive("home") }}>Home</li></Link>
                            <Link to="/menu"><li className={active === "menu" ? "active" : "styles.notactive"} onClick={() => { setactive("menu") }}>Menu</li></Link>
                            <Link to="/about"><li className={active === "aboutt" ? "active" : "notactive"} onClick={() => { setactive("about") }}>About</li></Link>
                            <Link to="/contact"><li className={active === "contact" ? "active" : "notactive"} onClick={() => { setactive("contact") }}>Contact</li></Link>
                        </ul></div></div>
                <div className={styles.icons}>
                    <div className={styles.searchbar}>
                        <input type="text" name="" id="" placeholder="Search...." value={search} onChange={(e) => handlesearch(e)} />
                    </div>
                    <Link to="/cart"><li className={active === "about" ? "active" : "notactive"} onClick={() => { setactive("cart") }}>
                        <div className={styles.addtocart}>
                            <IoBagAddOutline />
                            {/* <div className={styles.round}>{count}</div> */}
                        </div></li></Link>
                    <div className={styles.profile}>
                        <RiUserAddLine onClick={() => nav('/signin')} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbarr