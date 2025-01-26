import React from 'react'
import styles from './Products.module.css'; 
import { Link } from 'react-router-dom';

export default function ProductCustom({product}) {
  return (
  <div className={styles['product-card']} key={product._id}>
              <img
                className={styles['product-image']}
                src={product.mainImage.secure_url}
                alt={product.name}
              />
              <h3 className={styles['product-name']}>{product.name}</h3>
              <p className={styles['product-description']}>
                {product.description.split(' ').slice(0, 15).join(' ')}...
              </p>
              <div className={styles['product-pricing']}>
                <span className={styles['original-price']}>${product.price}</span>
                <span className={styles['discount-price']}>${product.finalPrice}</span>
                <span className={styles['discount-rate']}>-{product.discount}%</span>
              </div>
              <Link className={styles['view-details']}to={`/Product/${product._id}`}>View Details</Link>
            </div>
  )
}
