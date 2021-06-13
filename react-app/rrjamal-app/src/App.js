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
    </div>
>>>>>>> Staring homepage carousel
  );
}

export default App;