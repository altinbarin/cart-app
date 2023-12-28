import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import Home from './components/Home/HomePage';
import About from './components/About';
import ProductsPage from './components/Products/ProductsPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<ProductsPage/>}/>
      <Route path="/about" element={<About/>}/>     
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
