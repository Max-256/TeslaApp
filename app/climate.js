import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

function ClimateScreen(props) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/climate.png")}
      />
      <Pressable onPress={() => router.back()} style={styles.back}>
        <MaterialCommunityIcons name="chevron-left" color="gray" size={30} />
      </Pressable>

      <View style={styles.detailsContainer}>
        <Text style={styles.climateCondition}>
          Interior 74° F - Exterior 66° F
        </Text>
        <View style={styles.climateControls}>
          <View style={styles.align}>
            <MaterialCommunityIcons color="gray" name="power" size={30} />
            <Text style={styles.text}>On</Text>
          </View>
          <View style={styles.degree}>
            <MaterialCommunityIcons
              color="#5a5a5a"
              name="chevron-left"
              size={25}
            />
            <Text style={styles.temp}>68°</Text>
            <MaterialCommunityIcons
              color="#5a5a5a"
              name="chevron-right"
              size={25}
            />
          </View>
          <View style={styles.align}>
            <MaterialCommunityIcons color="gray" name="car-door" size={30} />
            <Text style={styles.text}>Vent</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  align: {
    alignItems: "center",
  },
  back: {
    position: "absolute",
    top: 50,
    left: 20,
    backgroundColor: "#2f3030",
    borderRadius: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "#161818",
  },
  climateCondition: {
    textAlign: "center",
    marginVertical: 15,
    fontWeight: "500",
    color: "gray",
  },
  detailsContainer: {
    position: "absolute",
    bottom: 20,
    width: "100%",
  },
  climateControls: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  degree: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 450,
  },

  temp: {
    fontSize: 40,
    color: "gray",
    marginHorizontal: 10,
  },
  text: {
    color: "gray",
    fontWeight: "bold",
  },
});

export default ClimateScreen;
