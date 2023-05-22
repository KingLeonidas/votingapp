import React, {useEffect} from "react";
import {GoogleButton} from 'react-google-button';
import "./login.css"
import { UserAuth } from "../context/AuthContext";
import {useNavigate } from "react-router-dom";

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
        console.log(user);
        if(user !=null){
           navigate('/home');
        }
    },[user] );

    return (
        <div className="page">
            <div className="cover">
            <h1>Login</h1>
            <div>
               <GoogleButton onClick={handleGoogleSignIn}/>
            </div>
            </div>
        </div>
    )
}

