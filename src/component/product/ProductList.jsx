import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function ProductList(){
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        async function fetchProducts(params) {
            const response = await fetch("https://dummyjson.com/products");
            const data = await response.json();
            setProducts(data.products);
        }
        fetchProducts();
    },[])
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="flex flex-col items-stretch bg-white rounded shadow p-2 max-w-[180px] mx-auto"
                >
                    <img
                        src={product.images[0]}
                        alt={product.title}
                        className="h-28 w-full object-cover mb-2 rounded"
                    />
                    <h2 className="font-semibold text-base mb-1 text-center">{product.title}</h2>
                    <p className="text-gray-600 text-xs mb-1 text-center">
                        {product.description.length > 40
                            ? product.description.slice(0, 40) + "..."
                            : product.description}
                    </p>
                    <div className="mt-auto flex flex-col items-center">
                        <span className="font-bold text-sm mb-1">${product.price}</span>
                        <button className="bg-blue-600 text-white px-3 py-0.5 rounded hover:bg-blue-700 transition text-xs">
                            Add to Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductList;