import { Text, View } from "react-native-web";
import { globalStyles } from "../styles/globalStyles";
import { Pressable } from "react-native";

export default function Home({ navigation }) {
  function handlepress() {
    navigation.navigate("LOGIN");
  }

  return (
    <View style={globalStyles.container}>
      <Pressable onPress={handlepress}>
        <View>
          <Text>bbbb</Text>
        </View>
      </Pressable>
      <Text style={globalStyles.container}>aaaaaaaaaaaaaa</Text>
    </View>
  );
}
