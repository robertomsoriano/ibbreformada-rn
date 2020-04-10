import { Platform, Linking, StyleSheet } from "react-native";

// Screens
export const HOME = `IBB Reformada`;
export const PETICION_FORM = "Enviar Petición";
export const PETICIONES = `Peticiones`;
export const LAT_LONG = {
  lat: 42.7041,
  long: -71.1677
};

//Functions

// Styles
export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
