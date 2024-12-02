import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container, Spinner, Alert } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import ProductDetailsModal from '../components/ProductDetailsModal';
import CategoriesDropdown from '../components/CategoriesDropdown'; // Import the dropdown component

function ProductPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://fakestoreapi.com/products${selectedCategory  === 'all' ? ''  : `/category/${selectedCategory}`}`);
        if (!response.ok) {
          throw new Error('Error fetching products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

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
      <Row className="mb-4">
        <Col xs={12}>
          <CategoriesDropdown
            onChange={setSelectedCategory}
            value={selectedCategory}
          />
        </Col>
      </Row>

      {loading && (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" variant="primary" />
        </div>
      )}

      {error && <Alert variant="danger">{error}</Alert>}

      <Row>
        {products.map((product, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
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
