import logo from '../images/logo.png'; 
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import React from 'react';
import '../App.css';


export default function Header(props){

    const {user,logOut}=UserAuth();

    const handleSignOut = async()=>{
        try{
            await logOut();
        }
        catch(error){
            console.log(error)
        }
    };

    return (
     <div>
            <div className ="nav">
                <img src={logo} alt="" className="nav-logo"/>
                <div className="nav-items">
                    Winn HS Voting App
                </div>
              {user?.displayName?<button onClick={handleSignOut}>Logout</button>:null}
            </div>
            <div className="Title">
           {props.title}
            </div>
            </div>
    );
}