import React,{useEffect, useState} from 'react'
import styles from './Checkout.module.css'
import { useNavigate } from 'react-router-dom';
const Checkout = () => {
    const[ordered,setordered]=useState(false);
    const nav=useNavigate();
    const handleorder=(e)=>{
        e.preventDefault();
        setordered(true)
    }
    useEffect(()=>{
        if(ordered==false){
            const time=setTimeout(()=>{
                nav('/');
            },3000);
        }
    },[ordered])
    return (
        <>
            <div className={styles.checkout}>
                <form className={styles.container}>
                    <h2>CheckOut</h2>
                    <fieldset className={styles.sec}>
                        <legend>Contact Details</legend>
                        <div className="input">
                            <label htmlFor="name">Name:</label>
                            <input type="text" placeholder='Enter Your Name' required />
                        </div>
                        <div className="input">
                            <label htmlFor="email">Email:</label>
                            <input type="email" placeholder='Enter Your Email' required />
                        </div>
                        <div className="input">
                            <label htmlFor="no">Phone:</label>
                            <input type="tel" placeholder='Enter Number' required />
                        </div>
                    </fieldset >
                    <fieldset className={styles.sec}>
                        <legend>Shipping Details</legend>
                        <div className="input">
                            <label htmlFor="name">Enter Address where need to be delivered:</label>
                            <input type="text" placeholder='Enter Delivery Address' required />
                        </div>
                        <div className="input">
                            <label htmlFor="city">City:</label>
                            <input type="text" placeholder='Enter City' required />
                        </div>
                        <div class="input">
                            <label htmlFor="State">State:</label>
                            <input type="text" placeholder='Enter State' />
                        </div>
                        <div className="input">
                            <label htmlFor="pin">Pincode:</label>
                            <input type="text" placeholder='Enter pin Code' />
                        </div>
                    </fieldset>
                     <button className={styles.btn} onClick={(e)=>handleorder(e)}>PlaceOrder</button>
                </form>
            </div>
            {ordered && (
                <>
                <div className={styles.main}>
                    <div className={styles.success}>
                        <h2>Order Placed</h2>
                        <p>Soon you will enjoy and refresh by having our food</p>
                        <button onClick={()=>setordered(false)}>Close</button>
                    </div>
                </div>
                </>
            )}
   
    </>
  )
}

export default Checkout