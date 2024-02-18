import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Categories = ({ onCategoryClick }) => {
  const categories = ['Clothing', 'Footwear', 'Electronics'];

  return (
    <div className="categories">
      <h2 className="title">Categories</h2>
      <div className="small-container">
        <div className="row">
          {categories.map((category) => (
            <div className="col-3" key={category}>
               <Link to={`/${category}`}>
                <img src={`/images/category-${categories.indexOf(category) + 1}.jpg`} alt={category} />
                <h4>{category}</h4>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
