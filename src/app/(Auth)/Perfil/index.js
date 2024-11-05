import { View, Text } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../../../context/auth";

export default function Perfil() {
  const { user } = useContext(AuthContext);

  return (
    <View>
      <Text>{user.email}</Text>
      <Text>{user.password}</Text>
    </View>
  );
}
