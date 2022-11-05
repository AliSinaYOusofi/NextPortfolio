import React, { createContext, useContext, useReducer } from "react";

interface ContextState {
    name: string | object | any;
}
interface AppContextInterface {
    theme: boolean;
  }
export const StateContext = createContext<AppContextInterface | any>("false");

export const StateProvider = ({children, initialTheme, reducer}: {children: any; initialTheme: any; reducer: any}): any => (
    <StateContext.Provider value={useReducer(reducer, initialTheme)}>
        {children}
    </StateContext.Provider>
);
// the fucking name of the file should be tsx not ts
export const useThemeProvider = () => useContext(StateContext);