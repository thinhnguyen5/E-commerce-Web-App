import {useState} from "react";
import {data} from "./ProductData";

function Product() {
    const [products] = useState(data)
    return (
        <>
            <h1>{data.length} items</h1>
        </>
    );
}

export default Product;