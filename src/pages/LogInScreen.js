import { Button, TextField } from '@mui/material'
import React, { useState } from 'react';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {doc, getDoc, getFirestore} from 'firebase/firestore';
import { firebaseConfig } from '../firebase';
import { initializeApp } from "firebase/app";

export default function LogInScreen() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

  return (
    <div>
        <div style={{paddingTop: '60px', textAlign: 'center'}}>
            <TextField value={username} label='Nazwa użytkownika' required autoComplete='username' 
            style={{marginRight: '40px'}} onChange={(e)=>{
                setUsername(e.target.value);
            }}/>
            <TextField value={password} label='Hasło' security required autoComplete='password' type='password' 
            style={{marginLeft: '40px'}} onChange={(e)=>{
                setPassword(e.target.value);
            }}/>
        </div>
        <Button onClick={async()=>{
            const auth = getAuth();
            const res = await signInWithEmailAndPassword(auth, username, password);

            const id = res.user.uid;

            const user = await getDoc(doc(db, "users", id));

            console.log(user.data());

        }}>
            Zaloguj się
        </Button>
    </div>
  )
}
