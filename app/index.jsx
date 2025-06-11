import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const index = () => {
  const [fontsLoaded] = Font.useFonts({
    "nunito-regular": require("../assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("../assets/fonts/Nunito-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Text style={styles.text}>Custom Font Loaded!</Text>;
};

export default index;

const styles = StyleSheet.create({
  text: {
    color: "blue",
    fontFamily: "nunito-bold",
  },
});
