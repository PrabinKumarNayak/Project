import { createContext } from "react";
import { featured_products } from "../assets/Assets";

export const StoreContext = createContext(null);
const StoreContextProvider = (props) =>{
    const contextValue = {
       featured_products
      };
      return (
        <StoreContext.Provider value={contextValue}>
          {props.children}
        </StoreContext.Provider>
      );
}
export default  StoreContextProvider