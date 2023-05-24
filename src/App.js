import './App.css';
import Ballot from './components/ballot';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login'
import {Routes,Route} from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import Protected from './components/Protected';

export default function App() {

  
  return (
    <div>
      <AuthContextProvider>
        <Header />
      <Routes>
      <Route exact path='/' element ={<Login/>}/>
      <Route exact path='/home' element ={<Protected><Ballot/></Protected>}/>
      </Routes>
      
      </AuthContextProvider>
      <footer> © Copyrighted 2023 Jose Jimenez. All Rights Reserved.</footer>
    </div>
  );
}

