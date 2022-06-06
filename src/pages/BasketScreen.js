

import { Button, CircularProgress, IconButton } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { changeCountInProductList, removeFromBasket } from '../store/actions/basket.actions';

export default function() {

    const basket = useSelector(state=>state.basket);

    const dispatch = useDispatch();

    return (
        <div style={{paddingTop: '30px', paddingLeft: '30px', paddingRight: '30px'}}>
            <p style={{textAlign: 'center', fontSize: '30px', fontWeight: 'bold'}}>Koszyk</p>
            {!basket.isLoading?<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
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
                                    <p>Ilość: 
                                        <IconButton variant='contained' onClick={()=>{
                                            if(product.count>1){
                                                for(var i in basket.products){
                                                    if(basket.products[i]==product){
                                                        dispatch(changeCountInProductList(i, product.count-1));
                                                    }
                                                }
                                            }
                                            else if(product.count==1){
                                                dispatch(removeFromBasket(product));
                                            }
                                        }}>
                                            -
                                        </IconButton>
                                        {product.count.toString()}
                                        <IconButton variant='contained' onClick={()=>{
                                            for(var i in basket.products){
                                                if(basket.products[i]==product){
                                                    dispatch(changeCountInProductList(i, parseInt(product.count)+1));
                                                }
                                            }
                                        }}>
                                            +
                                        </IconButton>
                                    </p>
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
                {basket.products.length==0?<p style={{fontSize: '24px'}}>Nie masz produktów w koszyku</p>:null}
            </div>:<CircularProgress color="inherit" />}
        </div>
    )
}
