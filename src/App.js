import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home/Home';
import Products from './Home/HomeProducts';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/about" element={<About/>}/>      
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
