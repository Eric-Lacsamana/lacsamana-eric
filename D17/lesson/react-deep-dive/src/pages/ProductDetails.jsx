import React from 'react';
import { Outlet, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>Products ID: {id}</h2>
            <Outlet />
        </div>
    )
}

export default ProductDetails;
