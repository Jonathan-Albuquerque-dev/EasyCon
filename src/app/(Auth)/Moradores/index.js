import {
  Text,
  View,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Residentes } from "../../../database/moradores.js";
import { router } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Moradores() {
  return (
    <View>
      <View>
        <TextInput style={style.input} />
        <FontAwesome name="search" style={style.icon} />
      </View>
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
    <TouchableOpacity
      style={style.container}
      onPress={() =>
        router.navigate(`details/infoMoradores/${itens.id}`, {
          name: itens.id,
        })
      }
    >
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
  input: {
    height: 50,
    padding: 10,
    marginHorizontal: 10,
    marginBottom: 13,
    marginTop: 15,
    borderRadius: 5,
    backgroundColor: "#DEDEDE",
    borderWidth: 1,
    borderColor: "#CFD0D0",
  },
  icon: {
    fontSize: 28,
    position: "absolute",
    right: 20,
    top: 25,
    color: "#548892",
  },
});
