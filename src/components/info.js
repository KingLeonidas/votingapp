import { UserAuth } from '../context/AuthContext';
import '../App.css';
import DropDownProfile from './DropDownProfile';
import { useState } from 'react';
import { BiChevronDown } from "react-icons/bi";

export default function Info(){

    const {user}=UserAuth();
    const [openProfile,setOpenProfile]=useState(false);

    let firstName =String(user.displayName);
    firstName =firstName.substring(0,firstName.indexOf(" "));


    const toggleIsLoading = () => {
        // 👇️ passed function to setState
        setOpenProfile(current => !current);
      };
   
    


    return(
        <div>
        <div className="nav--info_text">
           Hi, {firstName} <img className="userPic" src={user.photoURL} /><BiChevronDown onClick={toggleIsLoading}/>
        </div>
        {openProfile && <DropDownProfile/>}
        </div>
    )
}