import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";

function ClimateScreen(props) {
  const [temp, setTemp] = useState(68);
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handlePress = () => {
    active ? setActive(false) : setActive(true);
  };

  const handleDoor = () => {
    open ? setOpen(false) : setOpen(true);
  };

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
          <Pressable style={styles.align} onPress={handlePress}>
            <MaterialCommunityIcons
              color={active ? "white" : "gray"}
              name="power"
              size={30}
            />
            <Text style={[styles.text, { color: active ? "white" : "gray" }]}>
              {" "}
              {active ? "On" : "off"}
            </Text>
          </Pressable>
          <View style={styles.degree}>
            <MaterialCommunityIcons
              color="#5a5a5a"
              name="chevron-left"
              size={25}
              onPress={() => setTemp(temp - 1)}
            />
            <Text style={styles.temp}>{temp}°</Text>
            <MaterialCommunityIcons
              color="#5a5a5a"
              name="chevron-right"
              onPress={() => setTemp(temp + 1)}
              size={25}
            />
          </View>
          <Pressable onPress={handleDoor} style={styles.align}>
            <MaterialCommunityIcons
              color={open ? "white" : "gray"}
              name="car-door"
              size={30}
            />
            <Text style={[styles.text, { color: open ? "white" : "gray" }]}>
              {open ? "Open" : "Closed"}
            </Text>
          </Pressable>
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
