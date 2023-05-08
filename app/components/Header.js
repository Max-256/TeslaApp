import { View, StyleSheet, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

function Header(props) {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.title}>My model S</Text>
        <Text style={styles.subtitle}>Parked</Text>
      </View>
      <View>
        <FontAwesome name="user-circle" size={30} color="gray" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
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

export default Header;
