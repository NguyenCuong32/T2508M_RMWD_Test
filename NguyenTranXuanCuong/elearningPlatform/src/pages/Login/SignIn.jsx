import React from 'react';
import styles from '../Booking/Booking.module.css';
import { Link } from 'react-router-dom';

function SignIn() {
    return (
        <div className={styles.formContainer}>
            <h2>Sign In</h2>
            <form className={styles.bookingForm}>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit" className={styles.submitButton}>Sign In</button>
            </form>
            <p style={{ textAlign: 'center', marginTop: '20px' }}>
                Don't have an account? <Link to="/signup">Sign Up here</Link>
            </p>
        </div>
    );
}

export default SignIn;