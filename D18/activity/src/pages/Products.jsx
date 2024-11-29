import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import ProductDetailsModal from '../components/ProductDetailsModal';

function ProductPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Todo: replace with api call fetch 
  const products = [
    {
      title: "Example Product 1",
      price: 29.99,
      description: "This is a detailed description of the product.",
      category: "Electronics",
      image: "https://via.placeholder.com/400",
    },
    {
      title: "Example Product 2",
      price: 49.99,
      description: "Another detailed description of a different product.",
      category: "Home Appliances",
      image: "https://via.placeholder.com/400",
    },
  ];

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <Container>
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
