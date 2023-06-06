import { UserAuth } from '../context/AuthContext';
import '../App.css'
import { BiLogOut } from "react-icons/bi";


export default function DropDownProfile(){

    const {logOut}=UserAuth();
    

    const handleSignOut = async()=>{
        try{
            await logOut();
        }
        catch(error){
            console.log(error)
        }
    };

return(
    <div className="flex flex-col dropDownProfile">

<BiLogOut/><button type="button" className="logoutbutton" onClick={handleSignOut}>Sign Out</button>

    </div>
)

}