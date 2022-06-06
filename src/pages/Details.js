

import React, {useEffect}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import {getProduct} from '../store/actions/product.actions';

export default function (props) {

  const product = useSelector(state=>state.product);

  const dispatch = useDispatch();

  const {id_produktu} = useParams();

  useEffect(()=>{
    dispatch(getProduct(id_produktu))
  }, []);

  return (
    <div>
        <p style={{paddingTop: '30px', paddingLeft: '30px', paddingRight: '30px'}}>
          {product&&
            <div>
              <p style={{textAlign: 'center'}}><h2>{product.product.title}</h2></p>
              <p><span>{product.product.category}{'\t'}{product.product.rating&&product.product.rating.rate}</span></p>
              <img src={product.product.image} width="20%"/>
              <p>{'Cena:\t'+product.product.price}</p>
              <p>{product.product.description}</p>
            </div>
          }
        </p>
    </div>
  )
}
