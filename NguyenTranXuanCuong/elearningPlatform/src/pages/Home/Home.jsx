import React from 'react';
import styles from './Home.module.css';

import Object from '../../components/Object/Object';
import Subject from '../../components/Subject/Subject';
import objectsData from '../../data/object.json';
import subjectsData from '../../data/subjects.json';

function Home() {
    return (
        <>
            <section className={styles.sectionContainer}>
                <h2>WHO SHOULD LEARN PROGRAMING IN FPT APTECH?</h2> {/* [cite: 19, 20] */}
                <div className={styles.cardContainer}>
                    {objectsData.map((item) => (
                        <Object
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </div>
            </section>

            <section className={styles.sectionContainer}>
                <h2>WHAT IS THE COURSE PROGRAM?</h2> {/* [cite: 28] */}
                <div className={styles.cardContainer}>
                    {subjectsData.map((item) => (
                        <Subject
                            key={item.id}
                            subject={item.subject}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}

export default Home;