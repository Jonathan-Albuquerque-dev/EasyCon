import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import Input from "../components/input/Input";
import Button from "../components/button/Button.js";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <Text style={styles.txt}>Email:</Text>
        <Input />
        <Text style={styles.txt}>Senha:</Text>
        <Input />
      </View>
      <View style={{ alignItems: "center" }}>
        <Button text="Acessar" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 10,
  },
  containerInput: {
    alignItems: "center",
  },
  txt: {
    textAlign: "leaft",
    width: "80%",
    marginBottom: 8,
    color: "#23C0DB",
  },
});
