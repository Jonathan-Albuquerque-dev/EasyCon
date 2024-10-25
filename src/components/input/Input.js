import { TextInput, View } from "react-native";
import { style } from "./style";

export default function Input(props) {
  return (
    <TextInput
      style={style.input}
      secureTextEntry={props.secureTextEntry}
      keyboardType={props.keyboardType}
    />
  );
}

// email-address
