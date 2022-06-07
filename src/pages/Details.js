

import { CircularProgress } from '@mui/material';
import React, {useEffect}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import {getProduct} from '../store/actions/product.actions';

export default function (props) {

  const product = useSelector(state=>state.product);
  const basket = useSelector(state=>state.basket);

  const dispatch = useDispatch();

  const {id_produktu} = useParams();

  useEffect(()=>{
    dispatch(getProduct(id_produktu, basket.products))
  }, []);

  return (
    <div style={{textAlign: 'center'}}>
      
        {!product.isLoading?<p style={{paddingTop: '30px', paddingLeft: '30px', paddingRight: '30px'}}>
          {product&&
            <div>
              <p style={{textAlign: 'center'}}><h2>{product.product.title}</h2></p>
              <p><span>{product.product.category}{'\t'}{product.product.rating&&product.product.rating.rate}</span></p>
              <img src={product.product.image} width="20%"/>
              <p>{'Cena:\t'+product.product.price}</p>
              <p>{product.product.description}</p>
              <p>{product.product.count&&product.product.count}</p>
            </div>
          }
        </p>: <CircularProgress color="inherit" style={{marginTop: '50px'}}/>}
    </div>
  )
}
