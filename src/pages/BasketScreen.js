

import { Button } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { removeFromBasket } from '../store/actions/basket.actions';

export default function() {

    const basket = useSelector(state=>state.basket);

    const dispatch = useDispatch();

    return (
        <div style={{paddingTop: '30px', paddingLeft: '30px', paddingRight: '30px'}}>
            <p>Koszyk</p>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                {basket&&basket.products&&basket.products.map((product)=>{
                    return(
                        <div style={{width: '22%', background: '#96aaab', margin: '15px', borderRadius: '25px'}}>
                            <div style={{padding: '10px', justifyContent: 'center', textAlign: 'center', display: 'flex',
                                flexDirection: 'column', height: '100%'}}>
                                <p style={{flexWrap: 'wrap', wordWrap: 'break-word'}}>{product.title}</p>
                                <div style={{width: '100%', height: '100%', background: '#fff', backgroundSize:'cover',
                                    alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
                                    <img src={product.image} width="50%"/>
                                </div>
                                <p style={{alignSelf: 'flex-end', marginTop: 'auto', justifyContent: 'center', 
                                    width: '100%', paddingBottom: '10px'}}>
                                    <p>Cena: {product.price} $</p>
                                    <p>Ocena: {product.rating.rate}</p>
                                    <p>Ilość głosów: {product.rating.rate}</p>
                                    <p>{product.count.toString()}</p>
                                    <p>
                                        <Link to={('/szczegoly/'+product.id.toString())} style={{textDecoration: 'none'}}>
                                            <Button variant='contained'>
                                                Szczegóły
                                            </Button>
                                        </Link>
                                    </p>
                                    <p>
                                        <Button onClick={()=>{
                                            dispatch(removeFromBasket(product));
                                        }} variant='contained'>
                                            Usuń z koszyka
                                        </Button>
                                    </p>
                                </p>
                            </div>
                            
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
