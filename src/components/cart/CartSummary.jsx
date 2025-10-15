import { useState } from "react";
import { useCart } from "../../hooks/useCart";

function CartSummary() {
  const {cart, totalPrice} = useCart();
  const [discountCode, setDiscountCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(0);

  // Fixed shipping price
  const shipping = totalPrice > 0 ? 19.99 : 0;

  // Discount (example: SAVE10)
  const handleApplyDiscount = () => {
    if (discountCode.trim().toUpperCase() === "SAVE10") {
      setAppliedDiscount(0.1); 
    } else {
      setAppliedDiscount(0);
      alert("Invalid discount code ❌");
    }
  };

  const discountAmount = totalPrice * appliedDiscount;
  const total = totalPrice - discountAmount + shipping;

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-semibold text-amber-600 border-b pb-2">
        Order Summary
      </h3>

      <div className="flex justify-between text-gray-700">
        <span>Subtotal</span>
        <span>${totalPrice}</span>
      </div>

      <div className="flex justify-between text-gray-700">
        <span>Shipping</span>
        <span>${shipping.toFixed(2)}</span>
      </div>

      {appliedDiscount > 0 && (
        <div className="flex justify-between text-green-600">
          <span>Discount (10%)</span>
          <span>- ${discountAmount.toFixed(2)}</span>
        </div>
      )}

      <div className="flex gap-2 mt-2">
        <input
          type="text"
          placeholder="Discount code"
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
          className="flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
        <button
          onClick={handleApplyDiscount}
          className="bg-amber-500 text-white px-4 rounded hover:bg-amber-600 transition"
        >
          Apply
        </button>
      </div>

      <hr className="my-2" />

      <div className="flex justify-between text-lg font-semibold">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <button
        className="w-full bg-amber-600 text-white py-2 rounded hover:bg-amber-700 transition mt-3"
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default CartSummary;