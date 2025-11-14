import React from 'react';
import './hero.css'
import objectdata from '../../data/object.json'

function Hero() {
    return (
        <>
            <selection className='hero-section'>
                <div className='hero-content'>
                    <img src="./img/apteach.jpg" alt="apteach" />
                </div>


                <div className="who-learn-container">
                    <h3 className="who-learn-title">
                        SHOULD WHO LEARN PROGRAMING IN FPT APTECH?
                    </h3>

                    <div className='objects-grid'>

                        {objectdata.map((items, index) => (

                            <div key={index} className="object-card">
                                <img src={items.image} alt={items.title} />
                                <div className="icon-placeholder">🧑‍💻</div>
                                <h4 className="card-title">{items.title}</h4>
                                <p className="card-description">{items.description}</p>
                            </div>


                        ))}

                    </div>



                </div>
            </selection>
        </>
    )
}
export default Hero