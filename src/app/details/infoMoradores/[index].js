import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Residentes } from "../../../database/moradores.js";

export default function InfoMoradores() {
  const { index } = useLocalSearchParams();

  const morador = Residentes.filter((morador) => {
    return morador.id == index;
  });

  console.log(morador);

  return (
    <View>
      <Text>Info Moradores</Text>
    </View>
  );
}
