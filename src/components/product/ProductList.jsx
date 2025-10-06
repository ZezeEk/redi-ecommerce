import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { FaSearch } from "react-icons/fa";

function ProductList() {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState();
    const [query, setQuery] = useState("");
    const PRODUCT_CATEGORIES = new Set(products.map((product) => product.category)); // without repitation

    useEffect(() => {
        async function fetchProducts(params) {
            const response = await fetch("https://dummyjson.com/products");
            const data = await response.json();
            setProducts(data.products);
        }
        fetchProducts();
    }, [])

    return (
        <>
             <div className="w-full flex justify-center mt-6 mb-8 px-4">
                {/* Search Butonu */}
                <div className="flex w-full max-w-[400px] bg-white rounded shadow overflow-hidden">
                    {/* Select */}
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="px-3 py-2 border-r border-gray-300 focus:outline-none text-sm sm:text-base w-1/3 sm:w-auto"
                    >
                        {[...PRODUCT_CATEGORIES].map((category, index) => (
                            <option key={category + '' + index} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>

                    {/* Input */}
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search products..."
                        className="flex-1 px-3 py-2 focus:outline-none text-sm sm:text-base"
                    />

                    {/* Search Butonu */}
                    <button
                        //onClick={handleSearch}
                        className="bg-amber-500 text-white px-4 flex items-center justify-center hover:bg-amber-600 transition"
                    >
                        <FaSearch />
                    </button>
                </div>
            </div> *
            <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w- gap-3 overflow-hidden">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </>
    );
}

export default ProductList;