import { View, TouchableOpacity } from "react-native";
import { Text, StyleSheet, TextInput, ScrollView } from "react-native";
import HomeProfileCard from "../components/HomeProfileCard";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AddScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add patients</Text>
      <TextInput value="Search" style={styles.input}></TextInput>
      <ScrollView style={styles.scrollView}>
        <TouchableOpacity onPress={() => navigation.navigate("Map", {patientId: '0'})}>
          <HomeProfileCard
            name="Marjorie Greene"
            imgLink="../assets/patients/patient-1.png"
            age="79"
            bpm="102"
          ></HomeProfileCard>

        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate("Map", {patientId: '1'})}>
          <HomeProfileCard
            name="Joseph Malone"
            imgLink="../assets/patients/joemalone.jpeg"
            age="81"
            bpm="65"
          ></HomeProfileCard>

        </TouchableOpacity>
        <HomeProfileCard
          name="Stephanie Jones"
          imgLink="../assets/patients/patient-1.png"
          age="73"
          bpm="86"
        ></HomeProfileCard>
        <HomeProfileCard
          name="Jonathan Toews"
          imgLink="../assets/patients/patient-1.png"
          age="70"
          bpm="63"
        ></HomeProfileCard>
        <HomeProfileCard
          name="Nathaniel Chang"
          imgLink="../assets/patients/patient-1.png"
          age="86"
          bpm="89"
        ></HomeProfileCard>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    marginBottom: 28,
    borderRadius: 13,
    backgroundColor: "#e5e5e5",
    fontSize: 16,
    // fontWeight: 500,
  },
  container: {
    padding: 24,
    marginTop: 32,
  },
  scrollView: {
    display: "flex",
    gap: 20,
  },
  heading: {
    fontSize: 32,
    // fontWeight: 500,
    lineHeight: 39,
    letterSpacing: -0.5,
    marginBottom: 16,
  },
  // for map
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
  // for map
});

export default AddScreen;
