import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const updatedItems = prevCart.find(f => f.id === product.id);

            if (updatedItems) {
                return prevCart.map((item) =>
                    item.id === product.id ?
                        { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            const updatedCart = [...prevCart, { ...product, quantity: 1 }];
            return updatedCart;
        })
    }

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter(f => f.id !== productId));
    }

    const updateCartItem = (productId, actionType) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.map((item) => {
                if (item.id === productId) {
                    let newQuantity = item.quantity;

                    switch (actionType) {
                        case "INCREMENT_QUANTITY":
                            newQuantity += 1
                            break;
                        case "DECREMENT_QUANTITY":
                            newQuantity = Math.max(item.quantity - 1, 1)
                            break;
                        default:
                            return item;
                    }
                    return { ...item, quantity: newQuantity };
                }
                else return item;
            });
            return updatedCart;
        });
    }

    const totalItems = useMemo(() =>
        cart.reduce((total, item) => total + item.quantity, 0)
        , [cart]);

    const totalPrice = useMemo(() => {
        const total = cart.reduce((total, item) => total + item.price * item.quantity,
            0);
        return Number(total.toFixed(2));
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, totalItems, totalPrice, addToCart, removeFromCart, updateCartItem }}>
            {children}
        </CartContext.Provider>
    )
}