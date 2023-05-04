import { StyleSheet, View, Image, FlatList } from "react-native";
import Constants from "expo-constants";

import car from "../assets/images/car.png";
import menuOptions from "../assets/menuOptions";
import MenuOption from "./components/MenuOption";
import ControlRow from "./components/ControlRow";
import Header from "./components/Header";

export default function Page() {
  return (
    <View style={styles.container}>
      <Header />
      <Image style={styles.image} source={car} />

      <FlatList
        ListHeaderComponent={ControlRow}
        showsVerticalScrollIndicator={false}
        data={menuOptions}
        renderItem={MenuOption}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#161818",
    flex: 1,
    padding: 10,
    paddingTop: Constants.statusBarHeight,
  },

  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
});
