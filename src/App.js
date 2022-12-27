import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/pages/Home';
import Product from './components/pages/Product';
import SingleProduct from './components/pages/SingleProduct';
import Cart from './components/Cart';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import UserDetail from './components/pages/userDetail';


const App = () => {
    const [cart, setCart] = useState([]);
    const [warning, setWarning] = useState(false);

    const addToCart = (data) => {
      let isPresent = false;
      cart.forEach((product) => {
        if (data._id === product._id)
        isPresent = true
      })
      if (isPresent){
          setWarning(true);
          setTimeout(() => {
            setWarning(false);
          }, 2000);
          return ;
      }
      setCart([...cart, { ...data, quantity: 1 }]);
    }

  return (
    <Router>
      <Navbar size={cart.length} />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/store' element={<Product addToCart={ addToCart } />}/>
        <Route path='/:_id' element={<SingleProduct addToCart={ addToCart } />}/>
        <Route path='/cart' element={<Cart cart={ cart } setCart={ setCart } />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/userDetail' element={<UserDetail />} />
      </Routes>
      { 
          warning && <div className="warning">Item is already added to cart</div>
      }
      <Footer />
    </Router>
  );
}

export default App;
