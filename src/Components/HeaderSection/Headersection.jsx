import React from 'react'
import styles from './Headersection.module.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { slides } from '../../assets/assests';
const Headersection = () => {
    return (
        <>
            <div className={styles.header}>
                <Carousel>
                    <Carousel.Item className={styles.carouselitem}>
                        <img className="d-block w-100" src={slides.slide1} />
                        <Carousel.Caption className={styles.captionCustom}>
                            <h1 style={{ color: "#91ff00", fontSize: "40px",fontWeight:"bold" }}>Heritage & Taste</h1>
                            <h3 style={{ color: "#ffee00",fontSize:"30px" }}>Authentic Flavours</h3>
                            <p style={{ color: "#f5f5f5",fontSize:"20px" }}>You can experience the essence of South indian cuisine which will be loved by all generations</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className={styles.carouselitem}>
                        <img src={slides.slide2} className='d-block w-100' />
                        <Carousel.Caption className={styles.captionCustom}>
                            <h3 style={{ color: "yellow", fontSize: "30px" }}>Favourite Meals</h3>
                            <p style={{ color: "#fdfdf9" ,fontSize:"20px"}}>Taste and flavours you will feel in every bite</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className={styles.carouselitem}>
                        <img src={slides.slide3} className='d-block w-100' style={{ objectFit: "cover", height: "1000px" }} />
                        <Carousel.Caption className={styles.captionCustom}>
                            <h3 style={{ color: "yellow", fontSize: "30px" }}>Briyani made in love with different rice varities and different spices</h3>
                            <p style={{ color: "#fdfdf9",fontSize:"20px" }}> Briyani Lovers can taste our varities of briyani rice
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className={styles.carouselitem}>
                        <img src={slides.slide7} className='d-block w-100' style={{ objectFit: "cover", height: "800px" }} />
                        <Carousel.Caption className={styles.captionCustom}>
                            <h3 style={{ color: "yellow", fontSize: "30px" }}>Can try our different Starters</h3>
                            <p style={{ color: "#fdfdf9",fontSize:"20px" }}>Try our Starters </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className={styles.carouselitem}>
                        <img src={slides.slide5} className='d-block w-100' />
                        <Carousel.Caption className={styles.captionCustom}>
                            <h3 style={{ color: "yellow", fontSize: "30px" }}>Fresh Drinks AVailable</h3>
                            <p>From dishes ending up with cool/hot drinks will make you feel a fullfledged happy meals</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className={styles.carouselitem}>
                        <img src={slides.slide8} className='d-block w-100' />
                        <Carousel.Caption className={styles.captionCustom}>
                            <h3 style={{ color: "yellow", fontSize: "30px" }}>Customers satisfaction</h3>
                            <p>
                                Every customers should try every dish and need to have a happy smile on thier faces
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className={styles.carouselitem}>
                        <img src={slides.slide9} className='d-block w-100' />
                        <Carousel.Caption className={styles.captionCustom}>
                            <h3 style={{ color: "yellow", fontSize: "30px" }} className='yellow'>Small Desserts with Small Happiness</h3>
                            <p>
                                we have mini size desserts which every kiddo will like
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel></div>

        </>
    )
}

export default Headersection