import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styles from './Products.module.css'; 
import StripedExample from '../../../components/ProgressBar/ProgressBar';
import ProductCustom from './ProductCustom';
import useFetch from '../../../assets/Hooks/UseFetch';

export default function Products() {
  const {data,isLoading,error}=useFetch('https://ecommerce-node4.onrender.com/products?limit=10')



  if (isLoading) {
    return <StripedExample />;

  }

  return (
    <div className={styles['products-container']}>
      <h2 className={styles['products-title']}>Products</h2>
      <div className={styles['products-grid']}>
        {data.products.map((product) => (
        <><ProductCustom product={product}/>
          
          </>
        ))}
      </div>
    </div>
  );
}
