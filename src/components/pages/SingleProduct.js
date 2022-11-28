import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BsFillCartPlusFill } from "react-icons/bs";
import Axios from "axios";

const SingleProduct = ({ addToCart}) => {
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

    return (
        <>
            <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:py-20 lg:place-items-center">
                <article>
                    <img src={product.image} alt={product.title} className="w-full lg:rounded-2xl hover:scale-125 ease-in duration-500" />

                    <ul className="flex items-center justify-start gap-5 flex-wrap mt-5">
                        <li className="border-2 border-black-400 opacity-80 border-2 rounded-2xl overflow-hidden cursor-pointer">
                            <img src={product.thumbnail} alt="" className="w-20" />
                        </li>
                    </ul>
                </article>

                <article className="px-8 pb-10">
                    <h2 className="bg-slate-100 py-1 px-2 text-black-400 uppercase tracking-wide text-sm font-bold inline-block rounded shadow mb-10">Buwj Habit</h2>
                    <h1 className="text-slate-900 mb-10 font-bold text-3xl lg:text-4xl">{product.title}</h1>
                    <p className="text-slate-600 mb-10 leading-relaxed"><span className="font-bold">Form: </span>{product.form}</p>
                    <p className="text-slate-600 mb-10 leading-relaxed"><span className="font-bold">Material: </span>{product.material}</p>
                    <p className="text-slate-600 mb-10 leading-relaxed"><span className="font-bold">Size: </span>{product.size}</p>

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
                        <div className="lg:flex-1">
                            <button 
                                onClick={() => addToCart(product)}
                                className="flex items-center justify-center gap-4 text-black py-2 px-4 font-bold rounded-lg shadow mt-5 w-full lg:mt-0 hover:scale-125 ease-in duration-500">
                                <BsFillCartPlusFill /> Add to cart
                            </button>
                        </div>
                    </div>

                    <Link
                        to="/store"
                        className='inline-block bg-slate-600 py-2 px-6 rounded mt-8 text-white hover:bg-slate-500 transition-all duration-200'
                    >
                        &larr; Back
                    </Link>
                </article>
            </section>
        </>
    );
};

export default SingleProduct;