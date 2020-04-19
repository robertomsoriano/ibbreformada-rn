import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Container, Input, Grid, Col, Row, Button } from "native-base";
import { useNavigation, useNavigationState } from "@react-navigation/native";
// @ts-ignore
import FAIcon from "react-native-vector-icons/FontAwesome";
import { HOME, MainBlue, LOGIN } from "../constants";

import { globalStyles } from "../constants";
import GenericHeader from "../components/GenericHeader";
import { black } from "color-name";

import { Auth } from "aws-amplify";
import { FormInput } from "../components/FormInput";

const SignUp = () => {
  const navigation: any = useNavigation();
  const navigationState: any = useNavigationState(state => state);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [passwd, setPasswd] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const handleSubmit = async (
    fname: string,
    lname: string,
    email: string,
    phone: string,
    passwd: string,
    confirmPass: string
  ) => {
    console.log(fname, lname, email, phone, passwd, confirmPass);
    let user = {
      fname,
      email,
      phone,
      passwd,
      confirmPass
    };
    try {
      Auth.signUp({
        username: email,
        password: passwd,
        attributes: {
          email,
          "custom:fname": fname,
          "custom:lname": lname
        },
        validationData: [] //optional
      })
        .then((data: any) => {
          console.log(data);
          navigation.navigate(HOME);
        })
        .catch((err: any) => console.log(err));
      console.log("Sign Up");
      //   TODO -- reset inputs
      (() => {
        setFname("");
        setLname("");
        setEmail("");
        setPhone("");
        setPasswd("");
        setConfirmPass("");
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
            <Row style={{ flex: 0.5 }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "column",
                  alignSelf: "center",
                  alignItems: "center"
                }}
              >
                <Text style={styles.main}>IBB Reformada</Text>
              </View>
            </Row>
            <Row style={{ flex: 2 }}>
              <View style={{ flexDirection: "column", width: "100%" }}>
                <FormInput
                  inputName={`First Name`}
                  inputFunc={setFname}
                  inputValue={fname}
                />
                <FormInput
                  inputName={`Last Name`}
                  inputFunc={setLname}
                  inputValue={lname}
                />
                <FormInput
                  inputName={`Email`}
                  inputFunc={setEmail}
                  inputValue={email}
                  autoCapitalize={false}
                />
                {/* <FormInput
                  inputName={`Phone Number`}
                  inputFunc={setPhone}
                  inputValue={phone}
                /> */}

                <FormInput
                  inputName={`Password`}
                  inputFunc={setPasswd}
                  inputValue={passwd}
                  password={true}
                />
                <FormInput
                  inputName={`Confirm password`}
                  inputFunc={setConfirmPass}
                  inputValue={confirmPass}
                  password={true}
                />

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
                      handleSubmit(
                        fname,
                        lname,
                        email,
                        phone,
                        passwd,
                        confirmPass
                      );
                    }}
                  >
                    <Text style={{ color: "#fff" }}>Create account</Text>
                  </Button>
                </View>
              </View>
            </Row>
            <Row style={{ flex: 1 }}>
              <View style={{ flexDirection: "column", width: "100%" }}>
                <View
                  style={{
                    alignSelf: "center",
                    marginTop: 40
                  }}
                >
                  <Text>New to IBB Reformada?</Text>
                </View>

                <View
                  style={{
                    alignSelf: "center"
                  }}
                >
                  <TouchableOpacity onPress={() => navigation.navigate(LOGIN)}>
                    <Text
                      style={{
                        fontFamily: "Roboto",
                        fontWeight: "bold",
                        fontSize: 18,
                        color: MainBlue
                      }}
                    >
                      Already have an account?
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

export default SignUp;

const styles = StyleSheet.create({
  main: {
    fontSize: 20,
    fontWeight: "bold",
    color: MainBlue,
    marginTop: 20
  }
});
