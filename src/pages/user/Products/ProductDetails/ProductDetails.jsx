import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import StripedExample from '../../../../components/ProgressBar/ProgressBar';
import { AiFillStar } from 'react-icons/ai';
import useFetch from '../../../../assets/Hooks/UseFetch';
import styles from './ProductDetails.module.css';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { Slide, toast } from 'react-toastify';


export default function ProductDetails() {
  const { productId } = useParams();
const navigate=useNavigate()
  const { data, isLoading, error } = useFetch(
    `https://ecommerce-node4.onrender.com/products/${productId}`
  );

  if (isLoading) {
    return <StripedExample />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const product = data?.product;

  if (!product) {
    return <p>Product not found.</p>;
  }
  const addProductToCart= async()=>{
     const token =localStorage.getItem("userToken");
     console.log(token);
     
const response=await axios.post('https://ecommerce-node4.onrender.com/cart',{
  productId:productId
},{
  headers:{
    Authorization:`Tariq__${token}`
  }
})
if (response.status===201) {
  toast.info('product add successfully ', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Slide,
    });
    navigate('/Cart')
}
    
  }

  return (
    <div className={styles.productDetails}>
      {/* قسم الصور */}
      <div className={styles.imageSection}>
        {/* الصورة الرئيسية */}
        <div className={styles.mainImageContainer}>
          <img
            className={styles.mainImage}
            src={product.mainImage?.secure_url || ''}
            alt={product.name || 'Product'}
          />
        </div>

        {/* الصور الفرعية */}
        <div className={styles.subImagesContainer}>
          {product.subImages?.length > 0 ? (
            product.subImages.map((image, index) => (
              <img
                key={index}
                className={styles.subImage}
                src={image.secure_url || ''}
                alt={`${product.name || 'Product'} sub ${index + 1}`}
              />
            ))
          ) : (
            <p>No additional images available.</p>
          )}
        </div>
      </div>

      {/* معلومات المنتج */}
      <div className={styles.details}>
        <h1 className={styles.title}>{product.name || 'Product Name'}</h1>
        <p className={styles.description}>
          {product.description || 'No description available.'}
        </p>

        {/* الأسعار */}
        <div className={styles.pricing}>
          <span className={styles.originalPrice}>
            ${product.price?.toFixed(2) || '0.00'}
          </span>
          <span className={styles.finalPrice}>
            ${product.finalPrice?.toFixed(2) || '0.00'}
          </span>
        </div>

        {/* التقييم */}
        <div className={styles.rating}>
          <span>Rating: {product.avgRating?.toFixed(1) || 'N/A'}</span>
          <div className={styles.stars}>
            {[...Array(Math.round(product.avgRating || 0))].map((_, i) => (
              <AiFillStar key={i} className={styles.starIcon} />
            ))}
          </div>
        </div>

        {/* المخزون */}
        <div className={styles.stock}>
          <h3>Stock Availability:</h3>
          <p>
            {product.stock > 0 ? (
              <span className={styles.inStock}>
                available
              </span>
            ) : (
              <span className={styles.outOfStock}>sold out</span>
            )}
          </p>
        </div>

        {/* المراجعات */}
        <div className={styles.reviews}>
          <h2>Reviews</h2>
          {product.reviews?.length > 0 ? (
            product.reviews.map((review) => (
              <div key={review._id} className={styles.review}>
                <p>
                  <strong>{review.createdBy?.userName || 'Anonymous'}</strong>:{' '}
                  {review.comment}
                </p>
                <div className={styles.reviewRating}>
                  {[...Array(Math.round(review.rating || 0))].map((_, i) => (
                    <AiFillStar key={i} className={styles.starIcon} />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>
      </div>
      {/* add to cart */}
      <div> <Button className='btn btn-primary' onClick={addProductToCart}> add to cart </Button></div>
    </div>
  );
}
