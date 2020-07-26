import React, {createContext, useReducer} from "react";
import IOReducer from './reducers/IOReducer';


const initialState = {
    posts: [],
    error: null
};

const Store = ({children}) => {
    const [state, dispatch] = useReducer(IOReducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);
export default Store;