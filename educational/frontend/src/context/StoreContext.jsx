import { createContext } from "react";
import { blog_list, community, course_features, courses } from "../assets/Assets";

export const StoreContext = createContext(null)
const StoreContextProvider = (props) => { 
    const contextValue = {
    courses,
    blog_list,
    course_features,
    community
    };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
