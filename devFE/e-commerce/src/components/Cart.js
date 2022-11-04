// import React from 'react';
// import {useParams } from 'react-router-dom';
// import {data} from "./pages/ProductData";

// export default function Cart() {
//     const { title } = useParams();
//     const productDetail = data.find((productDetail) => productDetail.title === title);
//     const {form, price, image, thumbnail, material} = productDetail
  
//     return (
//     <article className="bg-white rounded-2xl shadow-2xl p-8">
//         <h2 className="border-b border-slate-400">Cart</h2>
//         <div>
//             <img src={thumbnail} alt="" />
//             <ul>
//                 <li>{title}</li>
//                 <li>{price} x 3 <span>{price}*3</span></li>
//             </ul>
//             <button>
//                 <img src="https://fixmywp.com/wp-content/uploads/2013/07/mass-delete-wordpress-comments.png" />
//             </button>
//         </div>
//         <button className="bg-white py-2 px-4 font-bold rounded-lg shadow mt-5 w-full hover:bg-slate-600 transition-all duration-200">
//             Checkout
//         </button>
//     </article>
//   )
// }
