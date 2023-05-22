import React, {useEffect, useState} from "react";
import {GoogleButton} from 'react-google-button';
import "./login.css"
import { UserAuth } from "../context/AuthContext";
import {useNavigate } from "react-router-dom";

export default function Login() {

    const {googleSignIn,user}=UserAuth();
    const navigateTo =useNavigate();

    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }
   

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
           navigateTo('/home');
        }
    },[user] );

    return (
        <div className="page">
            <div className="cover">
                <form>
            <h2>Sign In</h2>
            
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />

            <div className="login-btn" onClick={popup}>Login</div>

            <p className="text">Or login using</p>
            </form>
            <div>
               <GoogleButton type="light" onClick={handleGoogleSignIn}/>
            </div>
            </div>
        </div>
    )
}

