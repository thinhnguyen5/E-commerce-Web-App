import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom'; 
import { AiOutlineShopping } from "react-icons/ai";
import './Cart.css'
import { useNavigate } from 'react-router';

const Cart = ({cart, setCart}) => {
    
    const [CART, setCART] = useState([])
    const [showCart, setShowCart] = useState(false);
    const cartRef = useRef();

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
                            <div className="cart-product-quantity">
                                <button
                                    onClick={() => {
                                        const _CART = CART.map((item, index) => {
                                            return cartIndex === index ? { ...item, quantity : item.quantity > 0 ? item.quantity - 1 : 0} : item
                                        })
                                        setCART(_CART)
                                    }}
                                >-</button>
                                <span className="count"> {cartItem.quantity} </span>
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
                                <span className="cart-product-total-price"> {cartItem.price * cartItem.quantity}$ </span>
                                <button className="remove-btn" onClick={() => handleRemove(cartItem.id)} >Remove</button>
                            </div>
                        </div>
                    )
                })
            }
            <div className="cart-summary">
                <Link to ='/sign-in'>
                    <button className="remove-btn">
                        Sign In
                    </button>
                </Link>
                <div className="cart-checkout">
                    <div className="subtotal">
                        <span>Subtotal</span>
                        <span>
                            {
                                CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
                            }
                            $
                        </span>
                    </div>
                    <p>Taxes and shipping calculated at checkout</p>
                    <button>Check out</button>
                    <div className="continue-shopping">
                        <Link to="/store">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-arrow-left"
                            viewBox="0 0 16 16"
                        >
                            <path
                            fillRule="evenodd"
                            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                            />
                        </svg>
                        <span>Continue Shopping</span>
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Cart;