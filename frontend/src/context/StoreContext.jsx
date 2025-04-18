
import { createContext } from "react";
import { food_list } from "../assets/Assets";

export const StoreContext = createContext(null)
const StoreContextProvider = (props)=>{
    const contextValue = {
        food_list
    }
    return(
        <StoreContext.Provider>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider