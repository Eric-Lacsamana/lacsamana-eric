import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import ProductDetailsModal from '../components/ProductDetailsModal';
import { useEffect } from 'react';

function ProductPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  useEffect(()=>{
    const fetchProducts = async () =>{
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        setError('Error fetching products');
      }

      const data =  await response.json();
      console.log('data', data);
      setProducts(data);
    }

    fetchProducts();
  }, [])

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <Container className="mt-5">
      <Row>
        {products.map((product, index) => (
          <Col key={index} md={4} className="mb-4">
            <ProductCard product={product} onViewDetails={handleViewDetails} />
          </Col>
        ))}
      </Row>

      {selectedProduct && (
        <ProductDetailsModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </Container>
  );
}

ProductPage.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductPage;
