import './App.css';
import Ballot from './components/ballot';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login'
import {Routes,Route} from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';

export default function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Header />
      <Routes>
        <Route path='/home' element ={<Ballot/>}/>
        <Route path='/' element ={<Login/>}/>
      </Routes>
      <footer> © Copyrighted 2023 Jose Jimenez. All Rights Reserved.</footer>
      </AuthContextProvider>
      
    </div>
  );
}

