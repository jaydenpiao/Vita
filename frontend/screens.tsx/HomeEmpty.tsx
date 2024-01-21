import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const HomeEmpty = () => {
  const navigation = useNavigation();

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
        <View>
          <Text style={styles.heading}>
            You don't seem to be attending to any patients at the moment
          </Text>
          <Text style={styles.body}></Text>
        </View>
        <TouchableOpacity
          style={styles.addPatients}
          onPress={() => navigation.navigate("AddScreen")}
        >
          <Image
            source={require("../assets/icons/add-patient-icon.png")}
            style={styles.icon}
          ></Image>
          <Text>Add Patients</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: { padding: 24, borderBottomWidth: 1, borderBottomColor: "#C6C6C8" },
  container: {
    marginTop: 32,
    display: "flex",
    justifyContent: "space-between",
  },
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
    marginBottom: 8,
  },
  patientsContainer: {
    padding: 24,
  },
  body: {
    opacity: 0.6,
    fontSize: 17,
  },
  addPatients: {
    gap: 4,
    borderRadius: 14,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    height: 50,
    borderColor: "#C6C6C8",
  },
});

export default HomeEmpty;
