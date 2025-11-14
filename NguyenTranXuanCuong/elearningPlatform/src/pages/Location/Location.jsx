import React from 'react';
import styles from './Locations.module.css';

function Locations() {
    return (
        <div className={styles.locationsContainer}>
            <h2>Our Locations</h2>
            <div className={styles.locationCard}>
                <h3>Hanoi Campus</h3>
                <p>No 8 Ton That Thuy - My Dinh, Nam Tu Liem, Ha Noi</p>
                <p>Phone: (024) 7300 8855</p>
            </div>
            <div className={styles.locationCard}>
                <h3>Ho Chi Minh Campus</h3>
                <p>512 Ly Thuong Kiet - District 10, Ho Chi Minh City</p>
                <p>Phone: (028) 7300 8866</p>
            </div>
        </div>
    );
}

export default Locations;