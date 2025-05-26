import { createContext } from "react";
import { featured_products, new_arrivals } from "../assets/Assets";

export const StoreContext = createContext(null);
const StoreContextProvider = (props) =>{
    const contextValue = {
       featured_products,
       new_arrivals
      };
      return (
        <StoreContext.Provider value={contextValue}>
          {props.children}
        </StoreContext.Provider>
      );
}
export default  StoreContextProvider