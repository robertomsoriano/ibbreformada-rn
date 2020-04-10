import React, { useState, FunctionComponent } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import {
  Container,
  Content,
  Item,
  Label,
  Input,
  Form,
  Button,
  Textarea
} from "native-base";
// @ts-ignore
import useForm from "../utils/useForm.js";
import { CustomHeader } from "../components/CustomHeader";
import { color } from "react-native-reanimated";

const PeticionesForm: FunctionComponent<any> = (props: any) => {
  //   console.log(props);
  const [modalVisible, setModalVisible] = useState(true);
  const [formData, handleChange] = useForm({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const handleSubmit = () => {
    return;
  };
  return (
    <Container>
      <CustomHeader />
      <View style={styles.container}>
        <Content style={styles.modalView}>
          <Text style={styles.formTitle}>Petición de Oración</Text>
          <Form style={{ alignContent: "center" }}>
            <Item stackedLabel style={styles.modalItem}>
              <Label style={styles.label}>Nombre</Label>
              <Input
                style={styles.modalInput}
                value={formData.name}
                onChange={handleChange}
              />
            </Item>
            <Item stackedLabel style={styles.modalItem}>
              <Label style={styles.label}>Telefono</Label>
              <Input style={styles.modalInput} placeholder="Opcional" />
            </Item>
            <Item stackedLabel style={styles.modalItem}>
              <Label style={styles.label}>Email</Label>
              <Input style={styles.modalInput} placeholder="Opcional" />
            </Item>
            <Item stackedLabel style={styles.modalItem}>
              <Label style={styles.label}>Petición</Label>
              <Input style={{ height: 100, ...styles.modalInput }} />
            </Item>
          </Form>
        </Content>

        <Button
          block
          style={{
            maxWidth: 120,
            margin: 6,
            alignSelf: "center",
            paddingHorizontal: 10,
            backgroundColor: "#04396C",
            borderRadius: 5
          }}
          onPress={() => handleSubmit()}
        >
          <Text style={{ color: "white" }}>Enviar</Text>
        </Button>
      </View>
    </Container>
  );
};

export default PeticionesForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    maxHeight: 600,
    marginTop: 40,
    overflow: "hidden"
  },
  modalView: {
    backgroundColor: "#04396C",
    width: 350,
    height: 50,
    borderRadius: 10,
    overflow: "hidden"
  },
  formTitle: {
    color: "white",
    alignSelf: "center",
    fontSize: 20,
    paddingVertical: 10
  },
  modalItem: {
    borderColor: "transparent",
    alignContent: "center"
  },
  label: {
    color: "white",
    marginBottom: 5
  },
  modalInput: {
    backgroundColor: "white",
    width: 320,
    borderColor: "transparent",
    borderRadius: 5
  }
});
