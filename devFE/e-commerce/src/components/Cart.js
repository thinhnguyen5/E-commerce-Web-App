import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import data from "../components/pages/ProductData"
import { AiOutlineShopping } from "react-icons/ai";
import './Cart.css'

const Cart = ({cart, setCart}) => {
    
    const [CART, setCART] = useState([])

     useEffect(() => {
        setCART(cart)
     }, [cart])

     const handleRemove = (id) =>{
        const arr = cart.filter((item)=>item.id !== id);
        setCart(arr);
    }

    return (
        <article className= "cart_article">
            {
                CART?.map((cartItem, cartIndex) => {
                    return (
                        <div className="cart_box">
                            <div className="cart_img">
                                <img src= {cartItem.image} width={40} />
                                <span className="cart_title"> {cartItem.title} </span>
                            </div>
                            <div>
                                <button
                                    onClick={() => {
                                        const _CART = CART.map((item, index) => {
                                            return cartIndex === index ? { ...item, quantity : item.quantity > 0 ? item.quantity - 1 : 0} : item
                                        })
                                        setCART(_CART)
                                    }}
                                >-</button>
                                <span> {cartItem.quantity} </span>
                                <button
                                    onClick={() => {
                                        const _CART = CART.map((item, index) => {
                                            return cartIndex === index ? { ...item, quantity : item.quantity + 1} : item
                                        })
                                        setCART(_CART)
                                    }}
                                        
                                >+</button>
                            </div>
                            <div>
                                <span> {cartItem.price * cartItem.quantity}$ </span>
                                <button onClick={() => handleRemove(cartItem.id)} >Remove</button>
                            </div>
                        </div>
                    )
                })
            }
            <div className="total">
                <span> Total price of your cart</span>
                <span>
                    {
                        CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
                    }
                    $
                </span>
            </div>
            <div className="lg:flex-1 cursor-pointer">
                <button 
                    className="flex items-center justify-center bg-black text-white py-2 px-4 font-bold rounded-lg shadow mt-5 lg:mt-0 hover:bg-slate-600 transition-all duration-200">
                    Checkout
                </button>
            </div>
        </article>
    )
}

export default Cart;