import React, { useState } from 'react';

const Filter = ({ onSortChange }) => {
  const handleSortChange = (event) => {
    const selectedSort = event.target.value;
    onSortChange(selectedSort);
  };

  return (
    <div className='filter-container'>
      <h2 className='title'>All Products</h2>
      <div className='filter-small-container'>
        <select onChange={handleSortChange}>
          <option value="">Default</option>
          <option value="price-low-to-high">Low to High</option>
          <option value="price-high-to-low">High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
