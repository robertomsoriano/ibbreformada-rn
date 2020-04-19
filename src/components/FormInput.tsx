import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input } from "native-base";

interface FormInputProps {
  inputName: string;
  inputValue: string;
  inputFunc: (value: React.SetStateAction<string>) => void;
  password?: boolean;
  autoCapitalize?: boolean;
}

export const FormInput = ({
  inputName,
  inputValue,
  inputFunc,
  password,
  autoCapitalize = true
}: FormInputProps) => {
  return (
    <View
      style={{
        height: 60,
        paddingVertical: 20
      }}
    >
      <View
        style={{
          height: 40,
          paddingHorizontal: 30
        }}
      >
        <Input
          placeholder={inputName}
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "black"
          }}
          value={inputValue}
          onChangeText={e => inputFunc(e)}
          secureTextEntry={password ? true : false}
          autoCapitalize={autoCapitalize ? "words" : "none"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
