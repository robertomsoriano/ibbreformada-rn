import { Platform, Linking, StyleSheet } from "react-native";

// Screens
export const HOME = `IBB Reformada`;
export const PETICION_FORM = "Enviar Petición";
export const PETICIONES = `Peticiones`;
export const SINGLEPET = `Petición`;
export const PRAYERS = `Pendientes`;
export const LOGIN = `Login`;
export const SIGNUP = `Sign up`;
//Functions

// Styles
export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
export const MainBlue = `#04396C`;
// GraphQL
export const SUBSCRIPTION = "SUBSCRIPTION";

// Misc
export const LAT_LONG = {
  lat: 42.7041,
  long: -71.1677
};

// CONTEXT TYPES
export const TOKEN = "IBBR_TOKEN";
export const AUTH_LOADING = "AUTH_LOADING";
export const USER_LOADED = "USER_LOADED";
export const AUTH_ERROR = "AUTH_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
