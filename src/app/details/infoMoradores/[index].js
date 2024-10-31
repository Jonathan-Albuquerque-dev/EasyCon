import { View, Text, Image, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Residentes } from "../../../database/moradores.js";
import { useState } from "react";

export default function InfoMoradores() {
  const { index } = useLocalSearchParams();

  const morador = Residentes.filter((item) => {
    return item.id == index;
  });

  return (
    <View style={style.container}>
      <View style={style.containerImage}>
        <Image
          source={require("../../../assets/person.png")}
          style={style.img}
        />
      </View>
      <View style={style.containerTxt}>
        <View style={style.containerNBA}>
          <Text style={style.txt}>Nome:</Text>
          <Text style={style.txt}>{morador[0].nome}</Text>
        </View>
        <View style={style.containerNBA}>
          <Text style={style.txt}>Bloco:</Text>
          <Text style={style.txt}>{morador[0].bloco}</Text>
        </View>
        <View style={style.containerNBA}>
          <Text style={style.txt}>Apt:</Text>
          <Text style={style.txt}>{morador[0].apt}</Text>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerImage: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
  },
  img: {
    width: 180,
    height: 180,
  },
  containerTxt: {
    flex: 1,
    paddingTop: 30,
    marginHorizontal: 10,
  },
  txt: {
    fontSize: 21,
    color: "#548892",
  },
  containerNBA: {
    flexDirection: "row",
    gap: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#DEDEDE",
    marginBottom: 15,
    padding: 15,
  },
});
