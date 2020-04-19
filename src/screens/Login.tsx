// TODO
// FORGOT PASSWORD
import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Container, Input, Grid, Col, Row, Button } from "native-base";
import { useNavigation, useNavigationState } from "@react-navigation/native";
// @ts-ignore
import FAIcon from "react-native-vector-icons/FontAwesome";
import { HOME, MainBlue, SIGNUP } from "../constants";

import { globalStyles } from "../constants";
import GenericHeader from "../components/GenericHeader";
import { black } from "color-name";
import { Auth } from "aws-amplify";
import { FormInput } from "../components/FormInput";

const Login = () => {
  const navigation: any = useNavigation();
  const navigationState: any = useNavigationState(state => state);
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const handleSubmit = async (email: string, passwd: string) => {
    try {
      Auth.signIn({
        username: email,
        password: passwd
      })
        .then((data: any) => {
          console.log(data);
          navigation.navigate(HOME);
        })
        .catch((err: any) => console.log(err));
      console.log("Signed in");
      //   TODO -- reset inputs
      (() => {
        setEmail("");
        setPasswd("");
      })();
    } catch (err) {
      console.log("error creating talk...", err);
    }
  };
  return (
    <>
      <GenericHeader />
      <Container>
        <Grid>
          <Col>
            <Row>
              <View
                style={{
                  flex: 1,
                  alignSelf: "flex-end",
                  alignItems: "center",
                  height: 100
                }}
              >
                <Text style={styles.main}>IBB Reformada</Text>
              </View>
            </Row>
            <Row>
              <View style={{ flexDirection: "column", width: "100%" }}>
                <FormInput
                  inputName={`Email`}
                  inputFunc={setEmail}
                  inputValue={email}
                  autoCapitalize={false}
                />
                <FormInput
                  inputName={`Password`}
                  inputFunc={setPasswd}
                  inputValue={passwd}
                  password={true}
                />
                <View
                  style={{
                    alignSelf: "center",
                    marginTop: 10
                  }}
                >
                  <TouchableOpacity onPress={() => alert("Forgot pass")}>
                    <Text
                      style={{
                        fontFamily: "Roboto",
                        fontWeight: "bold",
                        fontSize: 18,
                        color: MainBlue
                      }}
                    >
                      Forgot password?
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    alignSelf: "center",
                    marginTop: 60
                  }}
                >
                  <Button
                    block
                    style={{ width: 300, backgroundColor: MainBlue }}
                    onPress={() => {
                      alert("OK");
                      handleSubmit(email, passwd);
                    }}
                  >
                    <Text style={{ color: "#fff" }}>Log in</Text>
                  </Button>
                </View>
              </View>
            </Row>
            <Row>
              <View style={{ flexDirection: "column", width: "100%" }}>
                <View
                  style={{
                    alignSelf: "center",
                    marginTop: 100
                  }}
                >
                  <Text>New to IBB Reformada?</Text>
                </View>

                <View
                  style={{
                    alignSelf: "center"
                  }}
                >
                  <TouchableOpacity onPress={() => navigation.navigate(SIGNUP)}>
                    <Text
                      style={{
                        fontFamily: "Roboto",
                        fontWeight: "bold",
                        fontSize: 18,
                        color: MainBlue
                      }}
                    >
                      Create an account
                    </Text>
                  </TouchableOpacity>
                </View>
                <View></View>
              </View>
            </Row>
          </Col>
        </Grid>
      </Container>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    fontSize: 38,
    color: MainBlue
  }
});
