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

// // AWS
// import API, { graphqlOperation } from "@aws-amplify/api";
// import PubSub from "@aws-amplify/pubsub";

// import { createTodo } from "./graphql/mutations";

// //@ts-ignore
// import awsmobile from "../aws-exports";

// // Configure Amplify
// API.configure(awsmobile);
// PubSub.configure(awsmobile);

// async function createNewTodo() {
//   const todo = { name: "Use AWS AppSync", description: "Realtime and Offline" };
//   await API.graphql(graphqlOperation(createTodo, { input: todo }));
// }

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
        <Drawer.Screen name={PETICIONES} component={Peticiones} />
        <Drawer.Screen name={PETICION_FORM} component={PeticionesForm} />
        <Drawer.Screen name={PRAYERS} component={Prayers} />
        <Drawer.Screen name={LOGIN} component={Login} />
        <Drawer.Screen name={SIGNUP} component={SignUp} />
        <Drawer.Screen name={SINGLEPET} component={SinglePet} />
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
