import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../constants";
import { Container } from "native-base";
import { CustomHeader } from "../components/CustomHeader";

const Peticiones = () => {
  return (
    <Container>
      <CustomHeader />
      <View style={globalStyles.container}>
        <Text>Peticiones</Text>
      </View>
    </Container>
  );
};

export default Peticiones;

const styles = StyleSheet.create({});
