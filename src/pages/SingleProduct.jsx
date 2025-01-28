import React from 'react';
import RelatedProduct from '../components/RelatedProductSlider';
import NavTab from "../components/NavTab"
import ViewProduct from '../components/ViewProduct';
const SingleProduct = () => {
    return (
        <div>
            <ViewProduct />
            <RelatedProduct />
            <NavTab />
        </div>
    );
};

export default SingleProduct;