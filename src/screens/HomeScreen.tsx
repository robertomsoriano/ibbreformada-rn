import React, { FunctionComponent } from "react";
import { View, Text, StyleSheet, Linking, Image, Platform } from "react-native";
import { Container, Button } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { CustomHeader } from "../components/CustomHeader";
// import openMap from "react-native-open-maps";
import { PETICION_FORM, LAT_LONG, PETICIONES, MainBlue } from "../constants";

const HomeScreen: FunctionComponent<any> = (props: any) => {
  return (
    <Container>
      <CustomHeader />
      <View style={styles.mainView}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../assets/images/book_svg.png")}
            style={{ width: 131, height: 102 }}
          />
          <Text style={{ fontSize: 18 }}>¡Bienvenido!</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignSelf: "center"
          }}
        >
          <View style={{ marginRight: 50 }}>
            <TextAndButton
              mainText=""
              btnText="Ver en vivo"
              linkTo="https://ibbreformada.org/ver-en-vivo/"
            />
          </View>
          <TextAndButton
            mainText=""
            btnText="Sermones"
            linkTo="https://ibbreformada.org/sermones"
          />
        </View>
        <TextAndButton
          width={300}
          mainText="Direcciones"
          btnText="Abrir Mapa"
          func={true}
        />
        <TextAndButton
          width={300}
          mainText="Ver lista de oración"
          btnText="Peticiones"
          goToScreen={PETICIONES}
        />

        <PlusButton
          mainText="Enviar petición de oración"
          btnText="+"
          goToScreen={PETICION_FORM}
        />
      </View>
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  mainView: {
    flex: 1,
    flexDirection: "column",
    // alignItems: "center"
    justifyContent: "space-around"
  }
});

// Custom Components
interface TBProps {
  width?: number;
  mainText: string;
  btnText: string;
  linkTo?: string;
  goToScreen?: string;
  func?: boolean;
}
export const TextAndButton = ({
  width,
  mainText,
  btnText,
  linkTo,
  goToScreen,
  func
}: TBProps) => {
  const navigation: any = useNavigation();
  const handleClick = () => {
    if (goToScreen) {
      navigation.navigate(goToScreen);
    } else if (linkTo) {
      Linking.openURL(linkTo);
    } else if (func) {
      let f: any = Platform.select({
        ios: () => {
          Linking.openURL(
            `http://maps.apple.com/maps?daddr=${LAT_LONG.lat},${LAT_LONG.long}`
          );
        },
        android: () => {
          console.log("ANDROID");
          Linking.openURL(
            `http://maps.google.com/maps?daddr=${LAT_LONG.lat},${LAT_LONG.long}`
          ).catch(err => console.error("An error occurred", err));
        }
      });

      f();
    } else {
      return;
    }
  };

  return (
    <View>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 16 }}>{mainText}</Text>
      </View>
      <Button
        block
        style={{
          width: width || 120,
          maxWidth: 300,
          margin: 6,
          alignSelf: "center",
          paddingHorizontal: 10,
          backgroundColor: MainBlue,
          borderRadius: 5
        }}
        onPress={() => {
          handleClick();
        }}
      >
        <Text style={{ color: "white" }}>{btnText}</Text>
      </Button>
    </View>
  );
};

// Add Button
interface PBProps {
  mainText: string;
  btnText: string;
  linkTo?: string;
  goToScreen?: string;
}
export const PlusButton = ({
  mainText,
  btnText,
  linkTo,
  goToScreen
}: PBProps) => {
  const navigation: any = useNavigation();
  const handleClick = () => {
    if (goToScreen) {
      navigation.navigate(goToScreen);
    } else if (linkTo) {
      Linking.openURL(linkTo);
    } else {
      return;
    }
  };
  return (
    <View>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 16 }}>{mainText}</Text>
      </View>
      <Button
        block
        style={{
          alignSelf: "center",
          paddingHorizontal: 16,
          margin: 6,
          backgroundColor: MainBlue,
          borderRadius: 10,
          transform: [{ rotate: "45deg" }]
        }}
        onPress={() => {
          handleClick();
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            transform: [{ rotate: "-45deg" }]
          }}
        >
          {btnText}
        </Text>
      </Button>
    </View>
  );
};
