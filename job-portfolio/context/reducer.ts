import React from "react";

export const initialThem = {
    theme: "dark"
}

function reducer(state : object | any, action : object | any) : any {
    switch(action.type) {
        case 'set_theme': {
            return {
                ...state, theme: action.theme
            }
        }
        default:
            return state;

    }
}

export default reducer;