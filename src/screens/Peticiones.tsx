import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity
} from "react-native";
import { globalStyles, SUBSCRIPTION } from "../constants";
import {
  Container,
  ListItem,
  Left,
  Body,
  Icon,
  Right,
  Title
} from "native-base";
import { CustomHeader } from "../components/CustomHeader";
// AWS
import { API, graphqlOperation } from "aws-amplify";
// @ts-ignore
import { listTodos as ListTodos } from "../graphql/queries";
// import { useNavigation } from "@react-navigation/native";

const Peticiones = () => {
  let items: Array<any> = [];
  const [state, setState] = useState({ items });
  // GraphQL Data
  useEffect(() => {
    const getData = async () => {
      try {
        const Data = await API.graphql(graphqlOperation(ListTodos));
        // console.log(Data);
        items = await transformData(Data, categories);
        setState({ items });
      } catch (err) {
        console.log("error fetching talks...", err);
      }
    };
    getData();
  }, []);

  const [stickyHeaderIndices, setStickyHeaderIndices] = useState();
  useEffect(() => {
    var arr = [];
    state.items.map((obj: any) => {
      if (obj.category) {
        arr.push(state.items.indexOf(obj));
      }
    });
    arr.push(0);
    setStickyHeaderIndices(arr);
  }, []);

  const renderItem = ({ item }: any) => {
    if (item.header) {
      return (
        <ListItem itemDivider>
          <Left />
          <Body style={{ position: "absolute", left: 15 }}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              {item.title}
            </Text>
          </Body>
          <Right />
        </ListItem>
      );
    } else if (!item.header) {
      return (
        <ListItem style={{ marginLeft: 0 }}>
          <Body style={{ position: "absolute", left: 20 }}>
            <TouchableOpacity
            // onPress={() => {
            //   console.log(item.id);
            // }}
            >
              <Text>{item.title}</Text>
            </TouchableOpacity>
          </Body>
        </ListItem>
      );
    }
  };

  return (
    <Container>
      <CustomHeader />
      {stickyHeaderIndices ? (
        <FlatList
          data={state.items}
          //@ts-ignore
          renderItem={renderItem}
          keyExtractor={item => item.title}
          stickyHeaderIndices={stickyHeaderIndices}
        />
      ) : (
        <FlatList
          data={state.items}
          //@ts-ignore
          renderItem={renderItem}
          keyExtractor={item => item.title}
          stickyHeaderIndices={stickyHeaderIndices}
        />
      )}
    </Container>
  );
};

export default Peticiones;

const styles = StyleSheet.create({});

export const data = [
  {
    id: "1",
    title: "Por Los Enfermos",
    description: "content of the item",
    category: ["Enfermos"]
  },
  {
    id: "2",
    title: "Por Los Enfermos 2",
    description: "content of the item",
    category: ["Enfermos"]
  },
  {
    id: "3",
    title: "Por Los Enfermos 3",
    description: "content of the item",
    category: ["Acciones de gracias"]
  },
  {
    id: "4",
    title: "Por Los Enfermos 4",
    description: "content of the item",
    category: ["Enfermos"]
  }
];

export const categories = ["Enfermos", "Acciones de gracias"];

export const transformData = async (data: any, categories: any) => {
  data = await data.data.listTodos.items;
  let result: any = [];
  for (const cat of categories) {
    let newObj = { title: cat, header: true };
    result.push(newObj);
    let itemsForCat = data.filter((item: any) => {
      if (item.category.includes(cat)) result.push(item);
    });
  }
  // console.log(result);
  return result;
};
