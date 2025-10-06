import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaHome } from "react-icons/fa";
import { useCart } from "../hooks/useCart";

function Header() {
  const navigate = useNavigate();
  const { cart } = useCart();

  return (
    <header className="bg-gray-100 text-amber-500 p-4 flex flex-col md:flex-row justify-between items-center">
      <h2 className="text-2xl font-bold">E-Commerce Store</h2>
      <nav className="flex items-center gap-4">
        {/* <a href="/" className="text-amber-500  mr-4 hover:underline">Home</a> */}
        <button onClick={() => navigate("/")} className="relative hover:opacity-80">
          <FaHome size={24} />
        </button>
        <button onClick={() => navigate("/cart")} className="relative hover:opacity-80"> <FaShoppingCart size={24} />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-amber-700 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </button>
      </nav>
    </header>
  );
}

export default Header;
