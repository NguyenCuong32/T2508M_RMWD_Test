import React from 'react';
import styles from './Product.module.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import productsData from '../../data/productData.json';

function Products() {
    return (
        <div className={styles.productsPage}>
            <h2>Our Programs</h2>
            <p className={styles.subHeader}>Explore our wide range of cutting-edge technology courses.</p>
            <div className={styles.productsContainer}>
                {productsData.map(product => (
                    <ProductCard
                        key={product.id}
                        title={product.title}
                        description={product.description}
                        image={product.image}
                    />
                ))}
            </div>
        </div>
    );
}

export default Products;