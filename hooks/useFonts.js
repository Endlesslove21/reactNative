import * as Font from "expo-font";

export default useFonts = async () => {
  await Font.loadAsync({
    helvetica: require("../assets/fonts/Helvetica.ttf"),
  });
};
