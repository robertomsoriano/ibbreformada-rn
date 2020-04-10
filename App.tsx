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
import { PETICION_FORM, HOME, PETICIONES } from "./constants";

const Drawer = createDrawerNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    ...Ionicons.font
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName={HOME}>
        <Drawer.Screen name={HOME} component={HomeScreen} />
        <Drawer.Screen name={PETICION_FORM} component={PeticionesForm} />
        <Drawer.Screen name={PETICIONES} component={Peticiones} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Roboto",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
