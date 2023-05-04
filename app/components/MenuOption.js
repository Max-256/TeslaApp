import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

function MenuOption({ item }) {
  return (
    <View style={styles.optionsRow}>
      <MaterialCommunityIcons name={item.iconName} size={26} color="gray" />
      <Text style={styles.optionText}>{item.name}</Text>
      <MaterialIcons
        style={{ marginLeft: "auto" }}
        name="keyboard-arrow-right"
        size={24}
        color="gray"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  optionsRow: {
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
  },
  optionText: {
    color: "#eee",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default MenuOption;
