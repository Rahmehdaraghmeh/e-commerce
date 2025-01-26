import axios from 'axios';
import React, { useState, useEffect } from 'react';
import StripedExample from '../../../components/ProgressBar/ProgressBar';
import styles from './Categories.module.css'; // استيراد ملف CSS Module
import { Link } from 'react-router-dom';
import useFetch from '../../../assets/Hooks/UseFetch';

export default function Categories() {
        
  const {data,isLoading,error}=useFetch('https://ecommerce-node4.onrender.com/categories/active')

  

  if (isLoading) {
    return <StripedExample />;
  }

  return (
    <div className={styles['categories-container']}>
      <h2 className={styles['categories-title']}>Explore Our Categories</h2>
      <div className={styles['categories-grid']}>
        {data.categories.map((category) => (
          <Link to={`/Categories/${category._id}`} className='catogeryLink'>
          <div className={styles['category-card']} key={category._id}>
            <img
              className={styles['category-image']}
              src={category.image.secure_url}
              alt={category.name}
            />
            <h3 className={styles['category-name']}>{category.name}</h3></div>
          </Link>
          
        ))}
      </div>
    </div>
  );
}
