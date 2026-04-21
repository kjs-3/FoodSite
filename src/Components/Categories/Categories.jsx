import React, { useContext } from 'react'
import { Fooditems } from '../Providerr/Providerr'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './categories.module.css';
const Categories = () => {
    const { foodlisting } = useContext(Fooditems);
    const foodlist = foodlisting.fooditems;
    return (
        <>
            <div className={styles.categorymain}>
                <h1 style={{ textAlign: "center", color: "#ff4757", fontStyle: "italic", fontWeight: "bold" }}>Good Food Good Mood<br />Search by Categories</h1>
                <div className={styles.caterow}>
                    {foodlist.map((items) => {
                        return (
                            <>
                                <div className={styles.cateitems} key={items.id}>
                                    <div className={styles.cateimage}>
                                        <img src={items.display_cate_img} />
                                    </div>
                                    <p style={{ color: "#ff4757", fontStyle: "italic", fontWeight: "bold" }}>{items.cate_title}</p>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>

        </>

    )
}

export default Categories