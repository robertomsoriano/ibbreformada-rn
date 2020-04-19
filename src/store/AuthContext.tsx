import React from "react";
import { AsyncStorage } from "react-native";
import {
  AUTH_LOADING,
  USER_LOADED,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  TOKEN
} from "../constants";

export const AuthStore = React.createContext({});
export const AuthDispatch = React.createContext({});
const getData = async (TOKEN: string) => {
  try {
    const value = await AsyncStorage.getItem(TOKEN);
    if (value !== null) {
      // value previously stored
    }
  } catch (e) {
    // error reading value
  }
};
const initialState = {
  token: getData(TOKEN),
  user: null,
  isAuthenticated: false,
  isLoading: false
};

const storeData = async (TOKEN: string, valToStore: any) => {
  try {
    await AsyncStorage.setItem(TOKEN, valToStore);
  } catch (e) {
    console.log(e);
  }
};
function AuthReducer({ state, action }: any) {
  switch (action.type) {
    case AUTH_LOADING:
      return {
        ...state,
        loading: true
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      storeData(TOKEN, action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      AsyncStorage.removeItem(TOKEN);
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false
      };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export function AuthProvider({ children }: any) {
  const [state, dispatch] = React.useReducer(AuthReducer, initialState);
  return (
    <AuthStore.Provider value={state}>
      <AuthDispatch.Provider value={dispatch}>{children}</AuthDispatch.Provider>
    </AuthStore.Provider>
  );
}

export function useAuthState() {
  const context = React.useContext(AuthStore);
  if (context === undefined) {
    throw new Error("useAuthState must be used within a AuthStore.Provider");
  }
  return context;
}
export function useAuthDispatch() {
  const context = React.useContext(AuthDispatch);
  if (context === undefined) {
    throw new Error(
      "useAuthDispatch must be used within a AuthDispatch.Provider"
    );
  }
  return context;
}

export function useAuth() {
  return [useAuthState, useAuthDispatch];
}
