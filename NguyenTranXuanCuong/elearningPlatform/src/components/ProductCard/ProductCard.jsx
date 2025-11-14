import React from 'react';
import styles from './ProductCard.module.css';

function ProductCard({ title, description, image }) {
    return (
        <div className={styles.card}>
            <img src={image} alt={title} className={styles.cardImage} />
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDescription}>{description}</p>
                <button className={styles.learnMoreButton}>Learn More</button>
            </div>
        </div>
    );
}

export default ProductCard;