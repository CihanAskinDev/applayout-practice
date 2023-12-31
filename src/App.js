import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Err404 from "./pages/Err404";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/contact" element= {<Contact/>} />
      <Route path="/about" element= {<About/>} />
      <Route path="/" element= {<Home/>} />
      <Route path="*" element= {<Err404/>} />
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
