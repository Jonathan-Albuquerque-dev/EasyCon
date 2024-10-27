import {
  Text,
  View,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Residentes } from "../../../database/moradores.js";

export default function Moradores() {
  return (
    <View>
      <FlatList
        data={Residentes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MoradoresList itens={item} />}
      />
    </View>
  );
}

function MoradoresList({ itens }) {
  return (
    <TouchableOpacity style={style.container}>
      <Image source={require("../../../assets/person.png")} style={style.img} />
      <View style={style.containerNome}>
        <Text>{itens.nome}</Text>
        <View style={style.containerBlocoAp}>
          <Text>bloco: {itens.bloco}</Text>
          <Text>apt: {itens.apt}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#23C0DB",
    gap: 20,
    borderWidth: 1,
    marginHorizontal: 10,
    marginBottom: 5,
    marginTop: 5,
    borderRadius: 7,
    padding: 10,
    flexDirection: "row",
  },
  containerNome: {
    gap: 10,
  },
  containerBlocoAp: {
    flexDirection: "row",
    gap: 5,
  },
  img: {
    width: 50,
    height: 50,
  },
});
