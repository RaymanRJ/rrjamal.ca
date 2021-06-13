import './App.css'
import Navigation from './components/navigation/navigation-bar'
import {
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
}

export default App;