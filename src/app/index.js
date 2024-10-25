import { Link } from "expo-router";
import { StyleSheet, Text, View, Image } from "react-native";
import Input from "../components/input/Input";
import Button from "../components/button/Button.js";
import { style } from "./style.js";
import Logo from "../assets/logo.png";

export default function Login() {
  return (
    <View style={style.container}>
      <View style={style.containerLogo}>
        <Image source={require("../assets/logo.png")} />
      </View>
      <View>
        <View style={style.containerInput}>
          <Text style={style.txt}>Email:</Text>
          <Input keyboardType={"email-address"} />
          <Text style={style.txt}>Senha:</Text>
          <Input secureTextEntry="true" keyboardType={"numeric"} />
        </View>
        <View style={{ alignItems: "center" }}>
          <Button text="Acessar" />
        </View>
      </View>
      <View style={style.containerCriarConta}>
        <Text>Não possui uma conta?</Text>
        <Link style={{ color: "#0097B2" }} href={"cadastro"}>
          Criar uma conta
        </Link>
      </View>
    </View>
  );
}
