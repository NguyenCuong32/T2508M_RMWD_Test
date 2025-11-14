import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
    const navigate = useNavigate();

    return (
        <header className={styles.header}>
            <div className={styles.logo} onClick={() => navigate('/')}>
                <span className={styles.logoFpt}>FPT</span>
                <span className={styles.logoAptech}>APTECH</span>
            </div>
            <nav>
                <ul className={styles.navLinks}>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/booking">Booking</Link></li>
                    <li><Link to="/locations">Locations</Link></li>
                </ul>
            </nav>
            <div className={styles.authButtons}>
                <button className={styles.btnSignin} onClick={() => navigate('/signin')}>Sign In</button>
                <button className={styles.btnSignup} onClick={() => navigate('/signup')}>Sign Up</button>
            </div>
        </header>
    );
}

export default Header;