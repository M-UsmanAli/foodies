import { createContext } from "react";

export const StoredContext = createContext(null)

const StoredContextProvider=(props:any)=>{


    const contextValue = {

    }
    return(
        <StoredContext.Provider value={contextValue}>
            {props.children}
        </StoredContext.Provider>
    )
}