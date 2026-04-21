import React, { useState } from 'react'
import styles from './signin.module.css'
const Signin = () => {
    const [status, setstatus] = useState('Login');
    return (
        <>
            <div className={styles.container}>
                {status == "signup" ? (
                    <div className={styles.box1}>
                        <h2 style={{ color: "#ff2b2b" }}><strong>Create Account</strong></h2>
                        <h3 style={{ color: "#ff2b2b", fontStyle: "italic", fontSize: "25px" }}>Welcome to ThikssRestro</h3>
                        <label htmlfor="name">Name:</label>
                        <input type="text" placeholder='Enter your name' />
                        <label htmlfor="email">Email:</label>
                        <input type="text" placeholder='Enter your email' />
                        <label htmlfor="dob">Date of Birth:</label>
                        <input type="date" placeholder='Enter your date of birth' />
                        <label htmlfor="password">Create Password:</label>
                        <input type="password" placeholder='Enter your Password ' />
                        <label htmlfor="cpassword">Confirm Password:</label>
                        <input type="password" placeholder='Re-Enter your Password ' />

                        <p>Already have an account?<button className={styles.sig} onClick={() => setstatus("login")}>Login here</button></p>
                        <button className={styles.btn}>Create Account</button>
                    </div>
                ) : (
                    <div class={styles.box2}>
                        <h2 style={{ color: "#ff2b2b" }}><strong>Login</strong></h2>
                        <p style={{ color: "#ff2b2b", fontStyle: "italic",fontSize:"25px" }}>Welcome to ThikssRestro</p>
                        <label htmlfor="email">Email:</label>
                        <input type="text" placeholder='Enter your email' />
                        <label htmlfor="password">Create Password:</label>
                        <input type="password" placeholder='Enter your Password ' />
                        <button className={styles.log}>Login</button>
                        <p>New Member?<button className={styles.btnn} onClick={() => setstatus("signup")}>SignUp</button></p>
                    </div>
                )}
            </div>




        </>
    )
}

export default Signin