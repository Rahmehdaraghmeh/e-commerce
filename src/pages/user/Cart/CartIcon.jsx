import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

export default function CartIcon() {
  return (
    <div
     style={{ fontSize: '24px', color: '#333', display: 'flex', alignItems: 'center', gap: '8px' }}
     >
      <FaShoppingCart />
      <span>Cart</span>
    </div>
  );
}
