import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(() => {
        const savedData = localStorage.getItem("cart");
        return savedData ? JSON.parse(savedData) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart(prev => {
            return [...prev, { product, qtn: 1 }]
        })
    }
    // console.log(cart);
    const increaseQtn = (id) => {
        setCart((prev) => {
            return prev.map((item) => {
                return item.product.id === id ? { ...item, qtn: item.qtn + 1 } : item
            })
        })
    }

    const decreaseQtn = (id) => {
        setCart((prev) => {
            return prev.map((item) => {
                return item.product.id === id ? (item.qtn > 1 ? { ...item, qtn: item.qtn - 1 } : item) : item
            })
        })
    }

    const removeItem = (id) => {
        setCart(prev => {
            return prev.filter((item) => {
                return item.product.id !== id;
            })
        })
    }
    return (
        <>
            <CartContext.Provider value={{ cart, setCart, addToCart, increaseQtn, decreaseQtn, removeItem }}>
                {children}
            </CartContext.Provider>
        </>
    )
}
export default CartProvider