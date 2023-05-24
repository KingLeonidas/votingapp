import { UserAuth } from '../context/AuthContext';
import '../App.css'

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

    <button type="button" className="logoutbutton" onClick={handleSignOut}>Logout</button>

    </div>
)

}