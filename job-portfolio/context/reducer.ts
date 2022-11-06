import React from "react";

export const initialThem = {
    theme: true // false indicates light theme
}

function reducer(state : object | any, action : object | any) : any {
    switch(action.type) {
        case 'set_theme': {
            return {
                ...state, theme: action.currentTheme
            }
        }
        default:
            return state;

    }
}

export default reducer;