import React from 'react';
import styles from './Subject.module.css';

function Subject({ subject, description, image }) {
    return (
        <div className={styles.card}>
            <img src={image} alt={subject} className={styles.cardImage} />
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{subject}</h3>
                <p className={styles.cardDescription}>{description}</p>
            </div>
        </div>
    );
}

export default Subject;