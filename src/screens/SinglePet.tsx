import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../constants";
import { CustomHeader } from "../components/CustomHeader";
import { Container } from "native-base";

const SinglePet = () => {
  return (
    <Container>
      <CustomHeader />
      <Text>Single</Text>
    </Container>
  );
};

export default SinglePet;

const styles = StyleSheet.create({});
