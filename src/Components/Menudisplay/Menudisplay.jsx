import { useNavigate } from 'react-router-dom';
import { Fooditems } from '../Providerr/Providerr';
import styles from './Menudisplay.module.css';
import React, { useContext, useReducer } from 'react'
import Cart from '../Addtocart/Cart';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const Menudisplay = () => {
    const { foodlisting, state, dispatch, setcount, count, search } = useContext(Fooditems);
    const menu_list = foodlisting.menuitemlist;
    const handlecart = (items) => {
        dispatch({ type: 'Lets Eat', payload: items });
        toast.success(`${items.name} added to cart!!`)
        setcount(count + 1);
    }
    const filteritems = menu_list.filter((item) => {
        return item.name.toLowerCase().includes(search.toLowerCase());
    })
    return (

        <>
            <br />
            <h2 style={{ textAlign: "center", color: "#ff4757", fontStyle: "italic", fontWeight: "bold" }}>Enjoy Your Dish With Ordering😉</h2>
            <h3 style={{ textAlign: "center", color: "#ff4757", fontStyle: "italic", fontWeight: "bold" }}>Top Dishes Near You</h3>
            <div className={styles.section}>
                {filteritems.map((items => {
                    return (
                        <>
                            <div className={styles.items} key={items.id}>
                                <div className={styles.trendimg}>
                                    <img src={items.image} alt={items.name} />
                                </div>
                                <div className={styles.trendcontent}>
                                    <h2 className={styles.trendname}>{items.name}</h2>
                                    <p className={styles.trendrate}>{items.rating}</p>
                                    <h4 className={styles.trendprice}>₹{items.price}</h4>
                                    <button className={styles.trendbtn} onClick={() => handlecart(items)}>Lets Eat</button>
                                </div>
                            </div>
                        </>
                    )
                }))}
            </div>
        </>
    )
}




export default Menudisplay