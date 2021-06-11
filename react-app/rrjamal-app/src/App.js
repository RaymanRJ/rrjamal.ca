import './App.css';
<<<<<<< HEAD
import Navigation from './components/navigation/navigation-bar'
import {
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
=======
import Navigation from './components/nav/nav';
import ControlledCarousel from './components/carousel/carousel'

function App() {
  return (
    <div className="App">
     <Navigation /> 
     <ControlledCarousel />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> Staring homepage carousel
  );
}

export default App;