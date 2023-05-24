import { UserAuth } from '../context/AuthContext';
import '../App.css';

export default function Info(){

    const {user,logOut}=UserAuth();
    const handleSignOut = async()=>{
        try{
            await logOut();
        }
        catch(error){
            console.log(error)
        }
    };


    return(
        <div>
        <div className="infotable">
           Hi, {user.displayName} <img className="userPic" src={user.photoURL} />
        </div>
        </div>
    )
}