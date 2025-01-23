import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchProducts } from '../../redux/features/productSlice';
import styles from './Deteil.module.css'
import { addBasket } from '../../redux/features/basketSlice';

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])



    const findProduct = products.find((product) => product._id === id)
    return (
        <div className='container'>
            <h1 className='d-flex justify-content-center'>Detail Page</h1>
           <div className={styles.details}>
          <div>
          <img src={findProduct?.image} alt="" />
          </div>
            <div>
            <h1>{findProduct?.name}</h1>
            <p>{findProduct?.category}</p>
            <p>{findProduct?.price}</p>
            <button className='btn btn-outline-primary' onClick={() => dispatch(addBasket(findProduct))}>Add basket</button>
            </div>
           </div>
        </div>
    )
}

export default Detail