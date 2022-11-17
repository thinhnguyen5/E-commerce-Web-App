import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BsFillCartPlusFill } from "react-icons/bs";
import Axios from "axios";

const SingleProduct = () => {
    const [product, setProduct] = useState([])
    const {_id} = useParams()

    useEffect(() => {
        console.log(_id)
        Axios.get(`https://e-commerce-web-app-be.herokuapp.com/products/${_id}`)
        .then(res => {
            console.log("Getting from ::::", res.data)
            setProduct(res.data)
        })
        .catch(err => {console.log(err)});
    }, [_id])

    const [amount, setAmount] = useState(0);
    //const [cart, setCart] = useState([]);

    const handleMinus = () => {
        setAmount(amount - 1)
        if (amount < 0) setAmount(0)
    };

    return (
        <>
            <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:py-20 lg:place-items-center">
                <article>
                    <img src={product.image} alt={product.title} className="w-full lg:rounded-2xl" />

                    <ul className="flex items-center justify-start gap-5 flex-wrap mt-5">
                        <li className="border-2 border-black-400 opacity-80 border-2 rounded-2xl overflow-hidden cursor-pointer">
                            <img src={product.thumbnail} alt="" className="w-20" />
                        </li>
                    </ul>
                </article>

                <article className="px-8 pb-10">
                    <h2 className="bg-slate-100 py-1 px-2 text-black-400 uppercase tracking-wide text-sm font-bold inline-block rounded shadow mb-10">Buwj Habit</h2>
                    <h1 className="text-slate-900 mb-10 font-bold text-3xl lg:text-4xl">{product.title}</h1>
                    <p className="text-slate-600 mb-10 leading-relaxed">{product.form}</p>
                    <p className="text-slate-600 mb-10 leading-relaxed">{product.material}</p>

                    <div className="flex flex-wrap items-center justify-between lg:flex-col lg:items-start lg:start-4">
                        <ul className="flex items-center gap-5">
                            <li className="text-slate-900 font-bold text-2xl">${product.price}</li>
                            <li className="bg-orange-100 py-1 px-2 text-black-400 tracking-wide text-sm font-bold inline-block rounded shadow">50%</li>
                        </ul>

                        <p className="text-slate-600 text-sm">
                            <s>${product.price*2}</s>
                        </p>
                    </div>

                    <div className="mt-10 lg:flex items-center justify-between gap-2">
                        <ul className="flex items-center justify-between bg-slate-100 py-2 px-4 rounded shadow lg:flex-1">
                            <li onClick={handleMinus} className="cursor-pointer">
                                <img className="w-5" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsfQp2cyWVsyFYLiJ4S6WqyqMvGj9eXdbnr9KbQg2E3w&s' alt="" />
                            </li>
                            <li>{amount}</li>
                            <li onClick={() => setAmount(amount + 1)} className="cursor-pointer">
                                <img className="w-5" src='https://media.istockphoto.com/vectors/black-plus-sign-positive-symbol-vector-id688550958?k=20&m=688550958&s=612x612&w=0&h=wvzUqT3u3feYygOXg3GB9pYBbqIsyu_xpvfTX-6HOd0=' alt="" />
                            </li>
                        </ul>
                        
                        <div className="lg:flex-1 cursor-pointer">
                            <button 
                                //onClick={() => addToCart(productDetail)}
                                className="flex items-center justify-center gap-4 bg-white py-2 px-4 font-bold rounded-lg shadow mt-5 w-full lg:mt-0 hover:bg-slate-600 transition-all duration-200">
                                <BsFillCartPlusFill /> Add to cart
                            </button>
                        </div>
                    </div>
                </article>
            </section>
        </>
    );
};

export default SingleProduct;