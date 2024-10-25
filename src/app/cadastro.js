import { Link } from "expo-router";
import {
  View,
  StyleSheet,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Input from "../components/input/Input.js";
import Button from "../components/button/Button.js";

export default function Cadastro() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.containerLogo}>
        <Image source={require("../assets/logo.png")} />
      </View>
      <View style={styles.containerInput}>
        <Text style={styles.txt}>Nome Completo:</Text>
        <Input />
      </View>
      <View style={styles.containerInput}>
        <Text style={styles.txt}>Email:</Text>
        <Input keyboardType={"email-address"} />
      </View>
      <View style={styles.containerInput}>
        <Text style={styles.txt}>Senha:</Text>
        <Input />
      </View>
      <View style={styles.containerInput}>
        <Text style={styles.txt}>Telefone:</Text>
        <Input keyboardType={"numeric"} />
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={styles.containerBlocoAp}>
          <View style={styles.blocoAp}>
            <Text style={styles.txt}>Bloco:</Text>
            <Input keyboardType={"numeric"} />
          </View>
          <View style={styles.blocoAp}>
            <Text style={styles.txt}>Apt:</Text>
            <Input keyboardType={"numeric"} />
          </View>
        </View>
      </View>
      <View style={{ alignItems: "center", marginTop: 10 }}>
        <Button text="Criar Conta" />
      </View>
      <View style={styles.containerVoltar}>
        <Text>Ja Possui uma conta?</Text>
        <Link style={styles.txtLogar} href={"/"}>
          Logar
        </Link>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginTop: 10,
  },
  containerLogo: {
    alignItems: "center",
    marginBottom: 30,
  },
  containerInput: {
    alignItems: "center",
    gap: 5,
  },
  txt: {
    width: "80%",
    color: "#23C0DB",
  },
  txtLogar: {
    color: "#23C0DB",
  },
  containerBlocoAp: {
    flexDirection: "row",

    width: "80%",
  },
  blocoAp: {
    width: "55%",
    gap: 10,
  },
  containerVoltar: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    gap: 6,
  },
});
