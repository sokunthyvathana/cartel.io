import { createContext, useState } from "react";

export const ShopContext = createContext();
import { products } from "../assets/assets";

const ShopContextProvider = (props) => {
    const currency ='$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [ShowSearch, setShowSearch] = useState(false);


    const value = {
        products, currency, delivery_fee,
        search, setSearch, ShowSearch, setShowSearch

    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )



}
export default ShopContextProvider;