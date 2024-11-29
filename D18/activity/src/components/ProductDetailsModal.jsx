import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function ProductDetailsModal({ product, isOpen, onClose }) {
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
}
