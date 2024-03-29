import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import { useEffect, useState } from "react";
import AlarmsBlock from "./components/AlarmsBlock/AlarmsBlock";

export default function App() {
  const [name, setName] = useState("");
  console.log(name);
  return (
    <>
      <Layout>
        <View style={styles.container}>
          <Text>смертьсмертьсмертьсмертьсмерть</Text>
          <TextInput
            placeholder="Введите имя"
            style={styles.input}
            onChangeText={(text) => setName(text)}
          />
          <Button title="Sign up" onPress={() => alert(`привет, ${name}`)} />
          <StatusBar style="auto" />
          <AlarmsBlock />
        </View>
      </Layout>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: 'column',
    gap: 20,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    width: 200,
  },
});
