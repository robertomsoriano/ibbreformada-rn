import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { AppLoading } from "expo";
import { Container, Text } from "native-base";
import { useFonts } from "@use-expo/font";
import { Ionicons } from "@expo/vector-icons";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

// Screens
import HomeScreen from "./screens/HomeScreen";
import Peticiones from "./screens/Peticiones";
import PeticionesForm from "./screens/PeticionesForm";
import {
  PETICION_FORM,
  HOME,
  PETICIONES,
  LOGIN,
  SIGNUP,
  SINGLEPET,
  PRAYERS
} from "./constants";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import SinglePet from "./screens/SinglePet";
import Prayers from "./screens/Prayers";
import { AuthProvider, useAuthState } from "./store/AuthContext";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <AuthProvider>
      <Index />
    </AuthProvider>
  );
}

export const Index = () => {
  const state = useAuthState();
  // console.log(state);
  let [fontsLoaded] = useFonts({
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    ...Ionicons.font
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  //@ts-ignore
  return !state.user ? (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName={HOME}>
        <Drawer.Screen name={HOME} component={HomeScreen} />
        <Drawer.Screen name={PETICIONES} component={Peticiones} />
        <Drawer.Screen name={PETICION_FORM} component={PeticionesForm} />
        <Drawer.Screen name={SINGLEPET} component={SinglePet} />
      </Drawer.Navigator>
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName={Login}>
        {/* <Drawer.Screen name={HOME} component={HomeScreen} />
        <Drawer.Screen name={PETICIONES} component={Peticiones} />
        <Drawer.Screen name={PETICION_FORM} component={PeticionesForm} />
        <Drawer.Screen name={PRAYERS} component={Prayers} /> */}
        <Drawer.Screen name={LOGIN} component={Login} />
        <Drawer.Screen name={SIGNUP} component={SignUp} />
        {/* <Drawer.Screen name={SINGLEPET} component={SinglePet} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Roboto",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
