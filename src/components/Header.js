import logo from '../images/logo.png'; 
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import React from 'react';


export default function Header(props){

    const {user,logout}=UserAuth();

    const handleSignOut = async()=>{
        try{
            await logout();
        }
        catch(error){
            console.log(error)
        }
    };

    return (
     <div>
            <nav className ="nav">
                <img src={logo} alt="" className="nav-logo"/>
                <div className="nav-items">
                    Winn HS Voting App
                </div>
              {user?.displayName?<button onClick={handleSignOut}>Logout</button>:<Link to='/'>Log In</Link>}
            </nav>
            <div className="Title">
           {props.title}
            </div>
            </div>
    );
}