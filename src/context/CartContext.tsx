import { createContext, useState } from "react";
import type { CartContextType, CartItem } from "../types/context";
import type { Product } from "../types/product";

export const CartContext = createContext<CartContextType | undefined>(undefined);


export const CartProvider = ({ children }: any) => {

    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (product: Product) => {

        setCart(prevCart => {

            const existingItem = prevCart.find(item => item.id === product.id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...product, quantity: item.quantity + 1 } : item
                );
            }

            return [...prevCart, { ...product, quantity: 1 }];
        });
    }

    const removeFromCart = (id: number) => {
        setCart(prevCart => prevCart.filter(p => p.id !== id));
    }

    const updateQuantity = (id: number, newQty: number) => {

        setCart(prevCart => {
            return prevCart.map(item => {
                if (item.id === id) {
                    item.quantity = newQty;
                    return item;
                }
                return item;
            });
        });
    };

    const clearCart = () => { setCart([]) }

    const cartTotal = cart.reduce((acc, item) => acc + (item.precio * item.quantity), 0);
    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <CartContext.Provider value={{
            cart, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount
        }}>
            {children}
        </CartContext.Provider>
    )

};





