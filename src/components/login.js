
import {GoogleButton} from 'react-google-button';
import "./login.css"
import { UserAuth } from "../context/AuthContext";



export default function Login() {

    const {googleSignIn}=UserAuth();
   

    const handleGoogleSignIn =async() =>{
        try{
            await googleSignIn();
            
        }
        catch (error){
            console.log(error);
        }
    };

   

   

   

    

    return (
        <div className="page">
            
            <div className="cover">
            <h2>Log in</h2>
            <div></div>
            <div>
               <GoogleButton type="light" onClick={handleGoogleSignIn}/>
            </div>
            </div>
        </div>
    )
}

