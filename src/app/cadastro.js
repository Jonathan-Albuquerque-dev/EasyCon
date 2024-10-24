import { Link } from "expo-router";
import { View, StyleSheet } from "react-native";

export default function Cadastro() {
  return (
    <View style={styles.container}>
      <Link href={"goBack"}> Home </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
