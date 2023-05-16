import logo from '../images/logo.png'; 


export default function Header(props){
    return (
     <div>
            <nav className ="nav">
                <img src={logo} alt="" className="nav-logo"/>
                <div className="nav-items">
                    Winn HS Voting App
                </div>
                <button>LogOut</button>
            </nav>
            <div className="Title">
           {props.title}
            </div>
            </div>
    );
}