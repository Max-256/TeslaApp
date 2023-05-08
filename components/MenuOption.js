import { Text, View, StyleSheet, Pressable } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

function MenuOption({ item }) {
  return (
    <Link href={item.href} asChild>
      <Pressable style={styles.optionsRow}>
        <MaterialCommunityIcons name={item.iconName} size={26} color="gray" />
        <Text style={styles.optionText}>{item.name}</Text>
        <MaterialIcons
          style={{ marginLeft: "auto" }}
          name="keyboard-arrow-right"
          size={24}
          color="gray"
        />
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  optionsRow: {
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  optionText: {
    color: "#eee",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default MenuOption;
