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
            <h2>Log in</h2>
            <div className="cover">
                <form>
            <div className="userInfo">
            <span>Email address</span>
            <input className="userInput" type="text" placeholder="Email address" />
            <span>Password</span>
            <input className="userInput" type="password" placeholder="Password" />

            <div className="login-btn" onClick={popup}>Log in</div>
            </div>
            </form>
            <div>
            <div className="text-divider">OR</div>
               <GoogleButton type="light" onClick={handleGoogleSignIn}/>
            </div>
            </div>
        </div>
    )
}

