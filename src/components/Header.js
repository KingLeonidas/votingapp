import logo from '../images/logo.png'; 
import { UserAuth } from '../context/AuthContext';
import React from 'react';
import '../App.css';
import Info from './info'
import DropDownProfile from './DropDownProfile';

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
            <nav>
                <img src={logo} alt="winnhs" className="nav--logo"/>
                <div className="nav--logo_text">Winn HS Voting App</div>
                   <div className="nav--info-text">{user?.displayName?<Info/>:null} </div>
          
            </nav>
    );
}