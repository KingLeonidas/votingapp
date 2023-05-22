import React, {useEffect, useState} from "react";
import {GoogleButton} from 'react-google-button';
import "./login.css"
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const {googleSignIn,user}=UserAuth();
    const navigate =useNavigate();

    const handleGoogleSignIn =async() =>{
        try{
            await googleSignIn()
        }
        catch (error){
            console.log(error);
        }
    };

    useEffect(()=>{
        if(user !=null){
            navigate('/home');
        }
    },[user] );

    return (
        <div className="cover">
            <h1>Login</h1>
           
            <div className="alt-login">
               <GoogleButton onClick={handleGoogleSignIn}/>
            </div>

           
            
        </div>
    )
}

