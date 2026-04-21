import React, { useContext, useMemo } from 'react'
import styles from './Cart.module.css';
import { Fooditems } from '../Providerr/Providerr';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
    const nav = useNavigate();
    const { state, dispatch, search } = useContext(Fooditems);

    // const menu_list = foodlisting.menuitemslist;
    //id,image,price,name
    //total amt calc
    // const totalAmount=cart.reduce((acc,item)=>{acc+(item.price*item.quantity),0})

    const cart = state.cart;
    const filteritems = cart.filter((item) => {
        return item.name.toLowerCase().includes(search.toLowerCase());
    })
    const totalamount = cart.reduce((acc, item) => {
        const price = Number(item.price) || 0;
        const quantity = Number(item.quantity) || 0;
        return acc + (price * quantity)
    }, 0);
    return (
        <>
            <h1>Ready to Eat</h1>
            {filteritems.map((item) => {
                const subtotal = (item.price * item.quantity);
                return (
                    <>
                        <div className={styles.cartitem} key={item.id}>
                            <div className={styles.cartdetails}>
                                <img className={styles.cartimg} src={item.image} alt={item.name} width="100px" height="100px" />
                                <div className={styles.cartname}>
                                    <h4>{item.name}</h4>
                                    <p className={styles.cartpricce}>{subtotal}</p>
                                </div>
                            </div>
                            <div className={styles.actions}>
                                <div className={styles.controls}>
                                    <button onClick={() => dispatch({ type: 'decrease', payload: item })}>-</button>
                                    <span className={styles.quantity}>{item.quantity}</span>
                                    <button onClick={() => dispatch({ type: 'increase', payload: item })}>+</button>
                                </div>
                            </div>


                            <button className={styles.removebtn} onClick={() => dispatch({ type: 'Remove', payload: item })}>Remove</button>
                        </div>

                    </>

                )
            })}
            <h3 style={{ color: "#ff2b2b" }} className={styles.total}>Total amount: <strong>₹{totalamount}</strong></h3>
            <button style={{ color: "white", backgroundColor: "green" }} onClick={() => nav('/checkout')}>Checkout</button>

        </>
    )
}

export default Cart