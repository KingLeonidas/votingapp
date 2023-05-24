import logo from '../images/logo.png'; 
import { UserAuth } from '../context/AuthContext';
import React from 'react';
import '../App.css';
import Info from './info'

export default function Header(props){

    const {user}=UserAuth();

  
    return (
     <div className="header">
            <div className ="nav">
                <img src={logo} alt="" className="nav-logo nav-items"/>
                <div className="nav-items apptitle">
                    Winn HS Voting App
                </div>
            <div className="nav-items">{user?.displayName?<Info/>:null}</div>
            </div>
            
            </div>
    );
}