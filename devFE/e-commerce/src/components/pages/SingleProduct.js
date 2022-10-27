import React from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {data} from "./ProductData";

// export default function SingleProduct() {
//     const { id } = useParams();
//     // const productDetail = data.find((productDetail) => productDetail.id === id);
//     // const {image, title, form, price} = productDetail
//     return (
//     <>
//         {/* <section className="max-w-5xl mx-auto">

//             <div>
//                 <article>
//                     <img src={image} alt={title} />
//                 </article>
//                 <article>
//                     <h1>{title}</h1>
//                     {form && <p>{form}</p>}
//                     <p>{price}$</p>
//                 </article>
//             </div>

//         </section> */}
//         <h4>{id}</h4>
//     </>
//     )
// }


const SingleProduct = () => {
    const { title } = useParams();
    const productDetail = data.find((productDetail) => productDetail.title === title);
    const {image, form, price} = productDetail

    return (
        <>
         <section className="max-w-5xl mx-auto">

             <div>
                 <article>
                     <img src={image} alt={title} />
                 </article>
                 <article>
                     <h1>{title}</h1>
                     {form && <p>{form}</p>}
                     <p>{price}$</p>
                 </article>
             </div>

         </section>

        </>
    );
};

export default SingleProduct;