

import { Button, Chip, CircularProgress, Rating, Snackbar, TextField } from '@mui/material';
import React, { Component, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToBasket, changeCountInProductList } from './store/actions/basket.actions';
import { changeCheckedCategory, changeCount, getAllCategories, getAllProducts } from './store/actions/products.actions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 
import { firebaseConfig } from './firebase';


function MainScreen(props){

    const dispatch = useDispatch();

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const products = useSelector(state=>state.products);
    const basket = useSelector(state=>state.basket);

    const [openAlert, setOpenAlert] = useState(false);

    useEffect(()=>{
        dispatch(getAllProducts(basket.products));
        dispatch(getAllCategories());
    }, []);

    const action = (
        <React.Fragment>
          <Button color="secondary" size="small" onClick={()=>{
                setOpenAlert(false);
            }}>
            Zamknij
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={()=>{
                setOpenAlert(false);
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      );

    return(
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>

            <div style={{display: 'flex', marginTop: '20px'}}>
                {products&&products.categories&&<div>{products.categories.map((category, index)=>{
                return (
                    <Chip label={category.category} variant={category.isChecked?"filled":"outlined"} onClick={()=>{
                        dispatch(changeCheckedCategory(index))
                    }}/>
                );
            })}</div>}
            </div>

            {!products.isLoading?<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                {products&&products!=undefined&&products.products&&products.products!=undefined?products.products.map((product)=>{
                if(products.checkedCategories.indexOf(product.category)!=-1||products.checkedCategories.length==0){
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
                                    <Rating value={product.rating.rate} precision={0.1} name="read-only" readOnly/>
                                    <p>Ilo???? g??os??w: {product.rating.rate}</p>
                                    <TextField label="Ilo????" variant="outlined" value={product.count} onChange={(e)=>{
                                        dispatch(changeCount(product.id, e.target.value));
                                    }} />
                                    <p>
                                        <Link to={('/szczegoly/'+product.id.toString())} style={{textDecoration: 'none'}}>
                                            <Button variant='contained'>
                                                Szczeg????y
                                            </Button>
                                        </Link>
                                    </p>
                                    <p>
                                        <Button onClick={()=>{
                                            var temp = false;
                                            for(var i in basket.products){
    
                                                if(basket.products[i].id == product.id){
                                                    basket.products[i].count = product.count;
                                                    temp = true;
                                                    dispatch(changeCountInProductList(i, product.count));
                                                    break;
                                                }
                                            }
                                            if(temp){
                                                setOpenAlert(true);
                                            }
                                            else{
                                                dispatch(addToBasket(product))
                                            }
                                            
                                        }} variant='contained'>
                                            Dodaj do koszyka
                                        </Button>
                                    </p>
                                </p>
                            </div>
                            
                        </div>
                    );
                }
                else return null;
                
            }):null}</div>:<CircularProgress color="inherit" style={{marginTop: '50px'}}/>}
            <Snackbar
                open={openAlert}
                autoHideDuration={6000}
                onClose={()=>{
                    setOpenAlert(false)
                }}
                message="Produkt znajduje si?? w koszyku"
                action={action}
            />
        </div>
    );
}

export default MainScreen;

