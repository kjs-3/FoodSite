import React, { useContext } from 'react'
import styles from './ComboOffer.module.css';
import { Fooditems } from '../Providerr/Providerr';
const ComboOffer = () => {
    const { foodlisting } = useContext(Fooditems);
    const combo_items = foodlisting.comboitems;
    // console.log(combo_items);
    return (
        <>
            <h2 style={{ textAlign: "center", color: "#ff4757", fontStyle: "italic", fontWeight: "bold" }}>Combo Offer..Hurray!!!</h2>
            <div className={styles.containers}>
                <div className={styles.cards}>
                    {combo_items.map((items) => {
                        return (
                            <>
                                <div className={styles.card} key={items.id}>
                                    <div className={styles.details}>
                                        <p className={styles.text}>{items.text}</p>
                                        <h3 className={styles.price}>{items.price}</h3>
                                        <button className={styles.combobtn}>Grab Offer</button>
                                    </div>
                                    <div className={styles.image}>
                                        <img src={items.image} alt={items.text} />
                                    </div>
                                </div>
                            </>
                        )
                    })}


                </div>
            </div>
        </>
    )
}

export default ComboOffer