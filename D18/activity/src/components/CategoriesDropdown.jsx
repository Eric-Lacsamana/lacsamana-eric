import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const CategoriesDropdown = ({ onChange, value }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="categories">Select Category: </label>
      {' '}
      <select
        id="categories"
        value={value}
        onChange={handleCategoryChange}
        disabled={categories.length === 0}
      >
        <option value="all">all</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

CategoriesDropdown.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

CategoriesDropdown.defaultProps = {
  onChange: () => {},
  value: '',
};

export default CategoriesDropdown;
