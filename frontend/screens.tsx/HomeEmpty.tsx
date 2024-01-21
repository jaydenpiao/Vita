import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const HomeEmpty = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.locationContainer}>
          <Image
            source={require("../assets/icons/location-icon.png")}
            style={styles.icon}
          ></Image>

          {/* TODO FETCH LOCATION HERE: */}
          <Text style={styles.locationText}>
            Evergreen Heights Assisted Living
          </Text>
        </View>
        <Text style={styles.date}>January 21, 2024</Text>
      </View>

      <View style={styles.patientsContainer}>
        <Text style={styles.heading}>
          You are currently not caring for any patients
        </Text>
        <Text style={styles.body}>
          Get started by clicking the button below
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: { padding: 24, borderBottomWidth: 1, borderBottomColor: "#C6C6C8" },
  container: { marginTop: 32 },
  icon: { height: 24, width: "auto", aspectRatio: "1 / 1" },
  locationText: { fontSize: 18 },
  locationContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  date: {
    opacity: 0.6,
    fontSize: 16,
    marginTop: 4,
  },
  heading: {
    fontWeight: "500",
    fontSize: 22,
    lineHeight: 28,
    letterSpacing: 0.35,
    marginBottom: 12,
  },
  patientsContainer: {
    padding: 24,
  },
  body: {
    opacity: 0.6,
    fontSize: 17,
  },
});

export default HomeEmpty;
