import {useState} from "react";
import data from "./ProductData";
import { Link } from 'react-router-dom';
import { BsFillCartPlusFill } from "react-icons/bs";

const Product = ({ addToCart }) => {
    const [products, setProducts] = useState(data)
    
    const [value, setValue] = useState(0)

    const [text, setText ] = useState("")
    
    return ( 
        <>
            {!products ? (
                <h1 className="flex items-center justify-center text-slate-800 text-center px-5 text-3xl h-screen font-bold uppercase ">Loading...</h1>  
            ) : ( 
                <>
                    <section className="p-8 max-w-6xl mx-auto">
                        <div className="text-center">
                            <h1 className="flex items-center justify-center text-slate-800 text-center px-5 text-3xl lg:text-5xl">
                                T-Shirt 
                            </h1>

                            <form className="mt-10 max-w-xl mx-auto" autoComplete="off"> 
                                <input type="text" name="search" placeholder="Search for a Tee" id="search" className=" py-2 px-4 rounded shadow 2-full"
                                    value={text}
                                    onChange={(e) => setText(e.target.value)} 
                                    />
                            </form>
                        </div>

                        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 text-center font-bold uppercase">
                            {
                                products.map((product) => {
                                    return (
                                        <div>
                                            <Link to={`/${product.title}`} key={product.id}>
                                                <article  className="border-2 border-black p-4 rounded-2xl">
                                                    <img 
                                                        src={product.image}
                                                        alt={product.title}
                                                        loading="lazy" 
                                                        className="rounded md:h-72 w-full object-cover " />
                                                    <h3 className="text-black text-lg font-bold mt-4">{product.title}</h3>
                                                    <p>{product.price}$</p>
                                                </article>
                                            </Link>

                                            <button 
                                                onClick={() => addToCart(product)}
                                                className="mt-10 lg:flex-1 cursor-pointer flex items-center justify-center gap-4 bg-white py-2 px-4 font-bold rounded-lg shadow mt-5 w-full hover:bg-slate-600 transition-all duration-200">
                                                <BsFillCartPlusFill /> Add to cart
                                            </button>
                                        </div>
                                    )   
                                })
                            }
                        </div>
                    </section>
                </>
            )}


        </>
    );
}

export default Product;