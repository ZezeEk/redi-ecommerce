import CartList from "./CartList";
import CartSummary from "./CartSummary"

function CartPage() {
    return (
        <div className="w-full h-screen p-6 bg-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
                <div className="md:col-span-2 items-stretch bg-gray-200 p-4 rounded shadow-lg">
                    <CartList/>
                </div>
                <div className="bg-gray-200 p-4 rounded shadow-lg">
                    <CartSummary/>
                </div>
            </div>
        </div>
    );
}

export default CartPage;