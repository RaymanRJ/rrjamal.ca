import logo from './logo.svg';
import './App.css';
import Navigation from './components/nav/nav';
import ControlledCarousel from './components/carousel/carousel'

function App() {
  return (
    <div className="App">
     <Navigation /> 
     <ControlledCarousel />
    </div>
  );
}

export default App;
