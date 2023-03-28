import logo from './logo.svg';
import './App.scss';
import Main from './pages/main';
import NavBar from './components/navBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Main/>
    </div>
  );
}

export default App;
