import React, { useContext } from 'react'
import { Fooditems } from '../Providerr/Providerr';
import styles from './TrendNow.module.css'
const TrendNow = () => {
    const { foodlisting } = useContext(Fooditems);
    const trend_items = foodlisting.trenditems;
    console.log(trend_items);
    return (
        <>
            <h2 style={{ textAlign: "center", color: "#ff4757", fontStyle: "italic", fontWeight: "bold" }}>Trending Now</h2>
            <div className={styles.section}>
                {trend_items.map((items) => {
                    return (
                        <>
                            <div className={styles.items} key={items.id}>
                                <div className={styles.trendimg}>
                                    <img src={items.image} alt={items.name} />
                                </div>
                                <div className={styles.trendcontent}>
                                    <h3 className={styles.trendname}>{items.name}</h3>
                                    <p className={styles.trendrate}>{items.rating}</p>
                                    <h4 className={styles.trendprice}>{items.price}</h4>
                                </div>


                            </div>
                        </>
                    )

                })}
            </div>
        </>
    )
}

export default TrendNow