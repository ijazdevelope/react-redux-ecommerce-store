import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import { ProductActions } from '../redux/actions/ProductActions';

const ProductListing = () => {
    const products = useSelector(state => state)
    console.log(products, 'products')

    const dispatch = useDispatch()
    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch(err => {
            console.log(err.message);
        })
        dispatch(ProductActions(response.data))
    }
    useEffect(() => {
        fetchProducts();
    }, [])
    return (
        <>
            <ProductComponent />
        </>
    )
}

export default ProductListing;
