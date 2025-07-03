import { Text, View } from "react-native-web";
import { globalStyles } from "../styles/globalStyles";
import { Pressable } from "react-native";

export default function Login({ navigation }) {
  function handlepress() {
    navigation.navigate("HOME");
  }
  return (
    <View style={globalStyles.container2}>
      <Pressable onPress={handlepress}>
        <View>
          <Text>aaaa</Text>
        </View>
      </Pressable>
      <Text style={globalStyles.container2}>bbbbb</Text>
    </View>
  );
}
