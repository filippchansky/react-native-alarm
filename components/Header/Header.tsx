import React from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={style.header}>
      <Text>Header</Text>
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    marginTop: 30,
    width: "100%",
    height: "10%",
    backgroundColor: "red",
  },
});

export default Header;
