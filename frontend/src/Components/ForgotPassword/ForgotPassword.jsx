import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../../Actions/User';
import './ForgotPassword.css'



const ForgotPassword = () => {

    const [email, setEmail]= useState("");

    const dispatch =useDispatch();
    const alert = useAlert();
    const {error,loading,message} =useSelector((state)=>state.like);


const submitHandler = (e)=>{
    e.preventDefault();
    dispatch(forgotPassword(email));
}

useEffect(()=>{
    if(error){
        alert.error(error);
        dispatch({type:"clearErrors"});
    }
    if(message){
        alert.success(message);
        dispatch({type:"clearMessage"});
    }
   
    },[alert, error,message,dispatch])
  return (
    <div className='forgotPassword'>
    <form className='forgotPasswordForm' onSubmit={submitHandler}>
        <Typography variant='h3' style={{padding:"2vmax"}}>Social App</Typography>

        <input 
        type="email" 
        className='forgotPasswordInputs'
        placeholder='Email' 
        required
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
    

        <Button disabled={loading} type='submit'>Send Token</Button>

    </form>
</div>
  )
}

export default ForgotPassword