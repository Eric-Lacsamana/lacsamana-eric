import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

function ProductCard({ product, onViewDetails }) {
  return (
    <Card className="product-card">
      <Card.Img variant="top" src={product.image} alt={product.title} className="product-card-img" />
      <Card.Body>
        <Card.Title className="product-card-title">{product.title}</Card.Title>
        <Card.Text>
          <strong>Price:</strong> ₱{product.price}
        </Card.Text>
        <Button variant="primary" onClick={() => onViewDetails(product)}>
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onViewDetails: PropTypes.func.isRequired,
};

export default ProductCard;
