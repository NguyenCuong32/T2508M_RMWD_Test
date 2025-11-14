import React, { useState } from 'react'; // <-- Import thêm useState
import styles from './Booking.module.css';

function Booking() {
    const [isBooked, setIsBooked] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        setIsBooked(true);
    };

    if (isBooked) {
        return (
            <div className={`${styles.formContainer} ${styles.successMessage}`}>
                <h2>Booking Successful! 🥳</h2>
                <p>Thank you for your booking. We will contact you shortly.</p>
            </div>
        );
    }
    return (
        <div className={styles.formContainer}>
            <h2>Book a Consultation</h2>
            <p>Please fill out the form below to book a consultation.</p>
            <form className={styles.bookingForm} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="tel" id="phone" name="phone" />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="course">Course of Interest:</label>
                    <select id="course" name="course">
                        <option value="react">Front-end Developer</option>
                        <option value="react">Back-end Developer</option>
                        <option value="react">Full Stack Developer</option>
                        <option value="php">Data Science</option>
                        <option value="net">AI Engineer</option>
                        <option value="net">DevOps</option>
                    </select>
                </div>
                <button type="submit" className={styles.submitButton}>Submit Booking</button>
            </form>
        </div>
    );
}

export default Booking;