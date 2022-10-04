
import React, { useEffect } from 'react'
import {Typography, Button} from "@mui/material"
import "./UpdatePassword.css"
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { updatePassword } from '../../Actions/User';
import { useAlert } from 'react-alert';

const UpdatePassword = () => {

    const[oldPassword,setOldPassword] = useState("");
    const[newPassword,setNewPassword] = useState("");

    const dispatch = useDispatch();
    const alert = useAlert();

    const {error,loading,message} = useSelector((state)=> state.like);

    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(updatePassword(oldPassword,newPassword))
    }

    
    useEffect(()=>{
      if(error){
          alert.error(error);
          dispatch({type:"clearErrors"})
      }
     
      if(message){
          alert.success(message);
          dispatch({type:"clearMessage"})
      }
  },[dispatch,error, alert,message])
  return (
    <div className='updatePassword'>
        <form className='updatePasswordForm' onSubmit={submitHandler}>
            <Typography variant='h3' style={{padding:"2vmax"}}>Social App</Typography>

           
            <input 
            type="password" 
            className='updatePasswordInputs'
            placeholder='Old Password'
            required
            value={oldPassword}
            onChange={(e)=>setOldPassword(e.target.value)}
            />

           
            <input 
            type="password" 
            className='updatePasswordInputs'
            placeholder=' New Password'
            required
            value={newPassword}
            onChange={(e)=>setNewPassword(e.target.value)}
            />


            <Button disabled={loading} type='submit'>Change Password</Button>

            

        </form>
    </div>
  )
}


export default UpdatePassword

