import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const Tutorial3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.pageIndicators}>
        <View style={styles.indicatorActive}></View>
        <View style={styles.indicatorActive}></View>
        <View style={styles.indicatorActive}></View>
        <View style={styles.indicatorActive}></View>
      </View>
      <View>
        <Text style={styles.heading}>And that’s it.</Text>
        <Text style={styles.text}>
          Ready to embrace the magic of AI-powered remote monitoring?
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("HomeEmpty")}
        >
          <Text style={styles.buttonText}>Next</Text>
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
});

export default Tutorial3;
