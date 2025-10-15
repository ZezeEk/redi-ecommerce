import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { FaSearch } from "react-icons/fa";

function ProductList() {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All Products');
    const [query, setQuery] = useState("");
    const PRODUCT_CATEGORIES = ['All Products', ...new Set(products.map((product) => capatialize(product.category)))]; // without repitation
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts(params) {
            try {
                const response = await fetch("https://dummyjson.com/products");
                if (!response.ok) throw new Error("Failed to load products");

                const data = await response.json();
                setProducts(data.products);
            }
            catch (err) {
                setError(err.message);
            }
            finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, [])

    if (loading)
        return <div className="flex justify-center items-center h-screen">
            <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin">            
            </div>
        </div>;
    if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

    function capatialize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    const filteredProducts = products.filter((f) => {
        const filterbyCategory = selectedCategory === 'All Products' || f.category.toLowerCase() === selectedCategory.toLocaleLowerCase();
        const filterbyQuery = query === '' || f.title.toLowerCase().includes(query) ||
            f.description.toLowerCase().includes(query);

        return filterbyCategory && filterbyQuery;
    });


    return (
        <>
            <div className="w-full flex justify-center mt-6 mb-8 px-4">
                <div className="flex w-full max-w-[400px] bg-white rounded shadow overflow-hidden gap-x-2 px-2">
                    {/* Select */}
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded focus:outline-none text-sm sm:text-base"
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
                        className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none text-sm sm:text-base"
                    />
                </div>
            </div>
            <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w- gap-3 overflow-hidden">
                {filteredProducts.map((product) => (
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