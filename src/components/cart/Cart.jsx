import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

function Cart() {
  const [product, setProduct] = useState({
    images: [],
    title: "",
    description: "",
    price: 0,
    rating: 0,
    brand: "",
    id: 0,
  });

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProduct(data.products[0]);
    }
    fetchProducts();
  }, []);

  return (
    <div className="w-screen h-screen p-6 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
        {/* Sol taraf */}
        <div className="md:col-span-2 items-stretch bg-blue-200 p-4 rounded overflow-hidden shadow-lg">
          <div
            key={product.id}
            className="flex flex-col bg-white rounded shadow p-2 md:flex-row justify-between items-center gap-4"
          >
            {/* Ürün bilgisi */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <img
                src={product.images[0]}
                alt={product.title}
                className="h-20 w-24 object-cover rounded"
              />
              <div>
                <h2 className="font-semibold text-base">{product.title}</h2>
                <p className="text-gray-500 text-sm">Brand: {product.brand}</p>
                <p className="text-gray-500 text-xs">Rating: {product.rating}</p>
              </div>
            </div>

            {/* Artı / Eksi butonları */}
            <div className="flex items-center border border-gray-300 rounded-full overflow-hidden h-8 text-sm">
              <button className="w-8 h-8 flex items-center justify-center text-amber-700 hover:bg-gray-100 focus:outline-none">
                −
              </button>
              <input
                type="number"
                readOnly
                value={1}
                className="w-8 text-center font-semibold outline-none border-0 focus:ring-0 text-amber-700 bg-transparent"
              />
              <button className="w-8 h-8 flex items-center justify-center text-amber-700 hover:bg-gray-100 focus:outline-none">
                +
              </button>
            </div>

            {/* Fiyat ve Çöp butonu */}
            <div className="flex flex-col items-center">
              <button className="hover:text-red-800 transition">
                <FaTrash className="text-red-700 w-4 h-4" />
              </button>
              <span className="font-bold text-sm mt-2.5">
                {product.price}€
              </span>
            </div>
          </div>
        </div>

        {/* Sağ taraf */}
        <div className="bg-green-200 p-4 rounded shadow-lg">
          Sağ taraf (dar)
        </div>
      </div>
    </div>
  );
}

export default Cart;