import { Link, router } from "expo-router";
import { StyleSheet, Text, View, Image, TextInput, Alert } from "react-native";
import Input from "../components/input/Input";
import Button from "../components/button/Button.js";
import { style } from "./style.js";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.js";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useContext(AuthContext);

  return (
    <View style={style.container}>
      <View style={style.containerLogo}>
        <Image source={require("../assets/logo.png")} />
      </View>
      <View>
        <View style={style.containerInput}>
          <Text style={style.txt}>Email:</Text>
          <Input
            keyboardType={"email-address"}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Text style={style.txt}>Senha:</Text>
          <Input
            secureTextEntry="true"
            keyboardType={"numeric"}
            value={password}
            onChangeText={(item) => setPassword(item)}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <Button text="Acessar" onPress={() => signIn(email, password)} />
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
