import React from 'react';
import styles from '../Booking/Booking.module.css';
import { Link } from 'react-router-dom';

function SignUp() {
    return (
        <div className={styles.formContainer}>
            <h2>Sign Up</h2>
            <form className={styles.bookingForm}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit" className={styles.submitButton}>Sign Up</button>
            </form>
            <p style={{ textAlign: 'center', marginTop: '20px' }}>
                Already have an account? <Link to="/signin">Sign In</Link>
            </p>
        </div>
    );
}

export default SignUp;