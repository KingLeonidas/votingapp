import './App.css';
import Ballot from './components/ballot';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div className="App">
      <header><Header title="NHS Officer Elections"/></header>
      <main>
      <Ballot />
      </main>
      <footer> © Copyrighted 2023 Jose Jimenez. All Rights Reserved.</footer>
    </div>
  );
}

