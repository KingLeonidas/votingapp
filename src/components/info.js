import { UserAuth } from '../context/AuthContext';
import '../App.css';
import DropDownProfile from './DropDownProfile';
import { useState } from 'react';

export default function Info(){

    const {user,logOut}=UserAuth();
    const [openProfile,setOpenProfile]=useState(false);

    const handleSignOut = async()=>{
        try{
            await logOut();
        }
        catch(error){
            console.log(error)
        }
    };

    const toggleIsLoading = () => {
        // 👇️ passed function to setState
        setOpenProfile(current => !current);
      };
   
    


    return(
        <div>
        <div className="nav--info_text">
           Hi, {user.displayName} <img onClick={toggleIsLoading} className="userPic" src={user.photoURL} />
        </div>
        {openProfile && <DropDownProfile/>}
        </div>
    )
}