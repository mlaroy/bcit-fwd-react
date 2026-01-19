import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { appStorageName } from '../globals/globalVariables';

// Initial state
const initialState = {
  username: null,
  location: null
};

// Action types
const ACTIONS = {
  CREATE_USER: 'CREATE_USER',
  DELETE_USER: 'DELETE_USER'
};

// Reducer function
function userReducer(state, action) {
  switch (action.type) {
    case ACTIONS.CREATE_USER:
      return {
        username: action.payload.username,
        location: action.payload.location
      };
    case ACTIONS.DELETE_USER:
      return {
        username: null,
        location: null
      };
    default:
      return state;
  }
}

// Create context
export const UserContext = createContext();

// Custom hook to use the context
export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}

// Provider component
export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, initialState);

  // Load user from localStorage on mount
  useEffect(() => {
    const userFromStorage = localStorage.getItem(appStorageName);
    if (userFromStorage) {
      try {
        const user = JSON.parse(userFromStorage);
        dispatch({
          type: ACTIONS.CREATE_USER,
          payload: user
        });
      } catch (error) {
        console.error('Error parsing user from localStorage:', error);
        localStorage.removeItem(appStorageName);
      }
    }
  }, []);

  // Actions
  const createUser = (userData) => {
    const userForStorage = JSON.stringify(userData);
    localStorage.setItem(appStorageName, userForStorage);
    dispatch({
      type: ACTIONS.CREATE_USER,
      payload: userData
    });
  };

  const deleteUser = () => {
    localStorage.removeItem(appStorageName);
    dispatch({ type: ACTIONS.DELETE_USER });
  };

  const value = {
    username: state.username,
    location: state.location,
    createUser,
    deleteUser
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}
