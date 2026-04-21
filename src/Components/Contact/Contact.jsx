import React from 'react'
import styles from './Contact.module.css';
const Contact = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.lhs}>
                    <h2>Contact details</h2>
                    <p><strong>Address:</strong>12/A XYZ</p>
                    <p><strong>PhoneNo:</strong>7276262722</p>
                    <p><strong>Email:</strong>thikssrestro@gmail.com</p>
                    <p><strong>Open-Close Time:</strong>10am - 11pm</p>
                </div>
                <div className={styles.rhs}>
                    <h2>Any Query please Contact Us by giving your details</h2>
                    <form action="">
                        <input type="text" placeholder='Enter your name' />
                        <input type="email" placeholder='Enter your email' />
                        <input type="phno" placeholder='Enter your MobileNo' />
                        <textarea rows="5" cols="6" placeholder='Your Message here....'></textarea>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact