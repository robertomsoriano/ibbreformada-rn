import React from "react";
import { Text, StyleSheet, Platform, StatusBar } from "react-native";
import { Header, Left, Right, Body } from "native-base";
// @ts-ignore
import FAIcon from "react-native-vector-icons/FontAwesome";
import { useNavigationState, useNavigation } from "@react-navigation/native";
import { HOME } from "../constants";

const GenericHeader = () => {
  const navigation: any = useNavigation();
  const navigationState: any = useNavigationState(state => state);
  return (
    <>
      <Header
        style={[
          {
            backgroundColor: "white",
            height: 50,
            borderBottomColor: "#757575",
            alignItems: "center",
            alignContent: "center"
          },
          styles.androidHeader
        ]}
      >
        <Left style={{ flex: 1, flexDirection: "row" }}>
          {navigationState.history.length > 1 && (
            <FAIcon
              onPress={() => navigation.goBack()}
              name="arrow-left"
              style={{
                fontSize: 20,
                color: "black",
                marginRight: 15,
                paddingBottom: 8
              }}
            />
          )}
        </Left>
        <Body style={{ flex: 1, alignItems: "center", alignContent: "center" }}>
          <Text
            style={{
              flex: 1,
              color: "#04396C",
              fontSize: 16,
              fontWeight: "bold"
            }}
          >
            {navigationState.index === 0
              ? HOME
              : navigationState.routeNames[navigationState.index]}
          </Text>
        </Body>
        <Right style={{ flex: 1 }} />
      </Header>
    </>
  );
};

export default GenericHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  androidHeader: {
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight
      }
    })
  }
});
