import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

const ProductDetailsModal = ({ product, isOpen, onClose }) => {
  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{product.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-center">
          <img src={product.image} alt={product.title} className="img-fluid" style={{ maxWidth: '300px' }} />
        </div>
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Description:</strong> {product.description}</p>
        <p><strong>Category:</strong> {product.category}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

ProductDetailsModal.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

ProductDetailsModal.defaultProps = {
  product: {
    title: '',
    price: 0,
    description: 'No description available.',
    category: '',
    image: '',
  },
  isOpen: false,
  onClose: () => {},
};

export default ProductDetailsModal;
