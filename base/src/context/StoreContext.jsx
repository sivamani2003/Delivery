import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems,setCartItems]=useState({})
    const url ="http://localhost:4010"
    const [token,setToken]=useState("");
    const addtoCart=(itemId)=>{
        if (!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev=>({...prev,[itemId]:prev[itemId]+1})))
        }
    }
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
   const getTotalCartAmount=()=>{
    let totalamount =0;
    for(const item in cartItems){
        if(cartItems[item]>0){
            let itemInfo = food_list.find((product)=>product._id===item)
            totalamount+=itemInfo.price * cartItems[item];
        }
       
    }
    return totalamount
   }
    const contextValue = {
        // Add your context values here
        food_list,
        cartItems,
        setCartItems,
        addtoCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
