import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoredContext = createContext<any>(null)

interface CartItems {
    [key: string]: number; // Assuming itemId is a string, and the value is the quantity
}
const StoredContextProvider = (props: any) => {

    const [cartItems, setCartItems] = useState<CartItems>({})

    const addToCart = (itemId: any) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }

    const removeFromCart = (itemId: any) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }



    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }
    return (
        <StoredContext.Provider value={contextValue}>
            {props.children}
        </StoredContext.Provider>
    )
}

export default StoredContextProvider;