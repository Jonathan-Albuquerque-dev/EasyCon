import { TouchableOpacity, Text } from "react-native";
import { style } from "./style";

export default function Input(props) {
  return (
    <TouchableOpacity style={style.containerBtn}>
      <Text style={style.txt}>{props.text}</Text>
    </TouchableOpacity>
  );
}
