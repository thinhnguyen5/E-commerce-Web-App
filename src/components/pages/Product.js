import {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { BiDetail} from "react-icons/bi";

const Product = ({ addToCart}) => {
    const [products, setProducts] = useState([])
    const [text, setText] = useState("")

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const res = await fetch("https://e-commerce-web-app-be.herokuapp.com/products")
                const data = await res.json()
                setProducts(data)
                console.log(data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchProductData()
    }, [])

    
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
                                />
                            </form>
                        </div>

                        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 text-center font-bold uppercase">
                            {
                                products.map((product) => {
                                    return (
                                        <div>
                                            <Link to={`/${product._id}`} key={product._id}>
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
                                            
                                            <Link to={`/${product._id}`} key={product._id}>
                                                <button 
                                                    onClick={() => addToCart(product)}
                                                    className="mt-10 lg:flex-1 cursor-pointer flex items-center justify-center gap-4 bg-white py-2 px-4 font-bold rounded-lg shadow mt-5 w-full hover:bg-slate-600 transition-all duration-200">
                                                    <BiDetail /> See More Detail
                                                </button>
                                            </Link>
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