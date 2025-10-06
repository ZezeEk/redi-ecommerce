import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({children}){
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
        // setCart ((prevCart)=>{
        //     const updatedCart = [...prevCart, product];
        //     localStorage.setItem("cart", JSON.stringify(updatedCart));
        //     return updatedCart;
        // })
    }

    const removeFromCart = (productId) =>{
        setCart((prevCart) => prevCart.filter(f=> f.id !== productId));
    }

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}