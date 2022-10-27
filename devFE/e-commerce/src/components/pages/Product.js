import {useState} from "react";
import {data} from "./ProductData";
import { Link } from 'react-router-dom';

function Product() {
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

                            <form className="max-w-xl mx-auto" autoComplete="off"> 
                                <input type="text" name="search" placeholder="Search for a Tee" id="search" className=" py-2 px-4 rounded shadow 2-full"
                                    value={text}
                                    onChange={(e) => setText(e.target.value)} 
                                    />
                            </form>
                        </div>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                            {products.map((product) => (
                                <Link to={`/${product.title}`} key={product.id}>
                                    <article  className="bg-slate-50 p-4 rounded">
                                        <img 
                                            src={product.image}
                                            alt={product.title}
                                            loading="lazy" 
                                            className="rounded md:h-72 w-full object-cover" />
                                        <h3 className="text-black text-lg font-bold mt-4">{product.title}</h3>
                                        <p>{product.price}</p>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </section>
                </>
            )}


        </>
    );
}

export default Product;