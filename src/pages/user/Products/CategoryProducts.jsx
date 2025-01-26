import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import StripedExample from '../../../components/ProgressBar/ProgressBar';
import styles from './Products.module.css'; 
import ProductCustom from './ProductCustom';
import useFetch from '../../../assets/Hooks/UseFetch';

export default function CategoryProducts() {
 const{categoryid}=useParams();
 console.log(categoryid);

  
  const { data, isLoading, error } =useFetch(
        `https://ecommerce-node4.onrender.com/products/category`,categoryid
      );
      
  if (isLoading) {
    return <StripedExample />;

  }

  return (
    <div className={styles['products-container']}>
      <h2 className={styles['products-title']}>Products</h2>
      <div className={styles['products-grid']}>
        {data.products.map((product) => (
         <ProductCustom product={product}/>
        ))}
      </div>
    </div>
  );
}

