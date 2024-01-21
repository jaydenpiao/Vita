import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { PageIndicator } from "react-native-page-indicator";
import { useNavigation } from "@react-navigation/native";
import Tutorial1 from "./Tutorial1";

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.pageIndicators}>
        <View style={styles.indicatorActive}></View>
        <View style={styles.indicatorInactive}></View>
        <View style={styles.indicatorInactive}></View>
        <View style={styles.indicatorInactive}></View>
      </View>
      {/* image */}
      <Image
    source={require("../assets/welcome.png")} // Update with the correct path
    style={styles.welcomeImage}
  />
      <View>
        <Text style={styles.heading}>Your patients, our priority, always</Text>
        <Text style={styles.text}>
          Vita allows caregivers to watch over their patients' well-being, even
          from a distance.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Tutorial1")}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageIndicators: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },
  indicatorActive: {
    borderRadius: 6,
    width: 40,
    height: 6,
    backgroundColor: "#1C1C1E",
  },
  indicatorInactive: {
    width: 20,
    height: 6,
    backgroundColor: "#1C1C1E",
    borderRadius: 6,
    opacity: 0.3,
  },
  container: {
    display: "flex",
    padding: 24,
    marginTop: 32,
    gap: 20,
    flex: 1,
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#1C1C1E",
    borderRadius: 14,
    height: 50,
    display: "flex",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: { fontSize: 16, color: "white" },
  heading: {
    fontSize: 32,
    fontWeight: "500",
    lineHeight: 39,
    letterSpacing: -0.5,
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 24,
    opacity: 0.6,
  },
  welcomeImage: {
    width: '110%', // or a specific width
    // height: 200, // or a specific height
    alignSelf: "center",
    
    resizeMode: 'cover', // or 'cover', depending on your needs
    marginBottom: 20, // Adjust as needed
  },
});

export default Welcome;
