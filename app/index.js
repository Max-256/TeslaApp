import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import Constants from "expo-constants";
import {
  FontAwesome,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";

import car from "../assets/images/car.png";
import menuOptions from "../assets/menuOptions";
import MenuOption from "./components/MenuOption";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>My model S</Text>
          <Text style={styles.subtitle}>Parked</Text>
        </View>
        <View>
          <FontAwesome name="user-circle" size={30} color="gray" />
        </View>
      </View>

      <Image style={styles.image} source={car} />

      <View style={styles.controls}>
        <Entypo name="lock" size={26} color="gray" />
        <MaterialCommunityIcons name="fan" size={26} color="gray" />
        <FontAwesome5 name="bolt" size={26} color="gray" />
        <Ionicons name="car-sport-sharp" size={26} color="gray" />
      </View>

      <FlatList
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
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#eee",
    marginBottom: 5,
  },
  subtitle: {
    color: "gray",
    fontWeight: "500",
  },
});
