import { createContext, useContext, useEffect, useReducer } from "react";
import { appStorageName } from "../globals/globalVariables";

// initial state
const initialState = {
    items: []
}

function getIndex(item, arr ) {
    return arr.findIndex( arrItem => arrItem.id == item.id);
}

function favsReducer(state, action) {
    switch(action.type) {
        case 'ADD_FAV':
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case 'DELETE_FAV':
            const itemsCopy = [...state.items];
            const indexToRemove = getIndex(action.payload, state.items)
            itemsCopy.splice(indexToRemove, 1);
            return {
                ...state,
                items: [...itemsCopy]
            }
        default:
            return state;
    }
}

export const FavsContext = createContext(initialState)

export const useFavs = () => {
    const favsContext = useContext(FavsContext);
    return favsContext
}


function FavsProvider({ children }) {
    const [state, dispatch] = useReducer(favsReducer, initialState);

    const addFav = kittenOb => {
        console.log({ kittenOb })
        dispatch({
            type: 'ADD_FAV',
            payload: kittenOb
        })
    }

    const deleteFav = kittenOb => {
        console.log('delete')
        dispatch({
            type: 'DELETE_FAV',
            payload: kittenOb
        })
    }

    const value = {
        favs: state.items,
        addFav,
        deleteFav
    }

    return (
        <FavsContext.Provider value={value}>
            {children}
        </FavsContext.Provider>
    )
}

export default FavsProvider;
