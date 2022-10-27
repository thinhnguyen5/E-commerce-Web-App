import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/pages/Home';
import Product from './components/pages/Product'
import SingleProduct from './components/pages/SingleProduct'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/store' element={<Product/>} />
        <Route path='/:title' element={<SingleProduct/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
