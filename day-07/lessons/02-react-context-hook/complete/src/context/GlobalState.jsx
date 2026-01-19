import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
// Initial state
const initialState = {
  user: null
}

const GlobalContext = createContext(initialState);

// Provider component
function GlobalProvider({ children }){
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // actions
    const createUser = (user) => {
        dispatch({
            type: 'CREATE_USER',
            payload: user
        })
    }

    const deleteUser = () => {
        dispatch({
            type: 'DELETE_USER',
            payload: null
        })
    }

    return (
        <GlobalContext.Provider
            value={{
                user: state.user,
                createUser,
                deleteUser
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalContext, GlobalProvider }
