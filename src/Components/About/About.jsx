import React from 'react'
import { useNavigate } from 'react-router-dom'
import aboutimg from '/images/aboutimg.jpeg';
import styles from './About.module.css';
const About = () => {
    let nav = useNavigate();
    return (
        <>
            <div className={styles.container}>
                <div className={styles.image}>
                    <img src={aboutimg} alt="ThikssRestro" />
                </div>
                <div className={styles.details}>
                    <h2>Our Motto</h2>
                    <p>Our approach is to gather all food cuisines and make people happy in every bite. You don't need to search for every item in different websites. If you want tamilnadu,andhra,kerala,chinese and more ,we have it all. <strong>"ThikssRestro"</strong> is a global platform where every state's cuisine is embedded and designed for your convenience. </p>
                    <p className={styles.highlights}>LESS FRUSTRATION ,FAST DELIVERY, FABULOUS TASTE FANTASTIC REVIEW</p>
                    <button className={styles.btnn} onClick={() => nav('/menu')}>Explore Menu</button>

                </div>
            </div>
        </>
    )
}

export default About