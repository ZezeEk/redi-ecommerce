import { useCart } from "../../hooks/useCart";

function ProductCard({product}){
    const {addToCart} = useCart();
    
    return <>
        <div
            className="flex flex-col items-stretch bg-white rounded shadow p-2 max-w-[180px] mx-auto">
                <img src={product.images[0]}
                     alt={product.title}
                     className="h-28 w-full object-cover mb-2 rounded"/>
                <h2 className="font-semibold text-base mb-1 text-center">{product.title}</h2>
                <p className="text-gray-600 text-xs mb-1 text-center">
                        {product.description.length > 40
                            ? product.description.slice(0, 40) + "..."
                            : product.description}
                </p>
                <div className="mt-auto flex flex-col items-center">
                    <span className="font-bold text-sm mb-1">{product.price}€</span>
                    <button onClick={() => addToCart(product)} className="bg-amber-700 text-white px-3 py-0.5 rounded hover:opacity-80 transition text-xs">
                        Add to Cart
                    </button>
                </div>
        </div>
    </>
}

export default ProductCard;