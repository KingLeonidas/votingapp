import {useContext,createContext,useState,useEffect} from 'react';
import {GoogleAuthProvider,signInWithRedirect,signOut,onAuthStateChanged} from 'firebase/auth';
import {auth} from '../firebase'
import {useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthContextProvider = ({children})=> {

    const [user,setUser]=useState({});
    const navigateTo =useNavigate();

    const googleSignIn =() => {
        const provider = new GoogleAuthProvider();
        
         signInWithRedirect(auth,provider);
    };

    const logOut =() =>{
        signOut(auth);
    };

    function validAccount(userEmail){
        return userEmail.split('@')[1] === 'eaglepassisd.net';
    }

    useEffect(() => {
        const unsubscribe =onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            if(currentUser!=null && !validAccount(currentUser.email)){
                signOut(auth);
            }
            else{
                navigateTo('/home');
            }
        });
        return ()=>{
            unsubscribe();
        };
    },[]);// eslint-disable-line react-hooks/exhaustive-deps
    

    return (
        <AuthContext.Provider value ={{googleSignIn,logOut,user}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth =()=> {
    return useContext(AuthContext);
};