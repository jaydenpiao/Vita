import { View } from "react-native";
import { Text, StyleSheet, TextInput, ScrollView } from "react-native";
import HomeProfileCard from "../components/HomeProfileCard";
import { Image } from "react-native";

const AddScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add patients</Text>
      <TextInput value="Search" style={styles.input}></TextInput>
      <ScrollView style={styles.scrollView}>
        <HomeProfileCard
          name="Marjorie Greene"
          imgLink="../assets/patients/patient-1.png"
          age="79"
        ></HomeProfileCard>
        <HomeProfileCard
          name="Marjorie Greene"
          imgLink="../assets/patients/patient-1.png"
          age="79"
        ></HomeProfileCard>
        <HomeProfileCard
          name="Marjorie Greene"
          imgLink="../assets/patients/patient-1.png"
          age="79"
        ></HomeProfileCard>
        <HomeProfileCard
          name="Marjorie Greene"
          imgLink="../assets/patients/patient-1.png"
          age="79"
        ></HomeProfileCard>
        <HomeProfileCard
          name="Marjorie Greene"
          imgLink="../assets/patients/patient-1.png"
          age="79"
        ></HomeProfileCard>
        <HomeProfileCard
          name="Marjorie Greene"
          imgLink="../assets/patients/patient-1.png"
          age="79"
        ></HomeProfileCard>
        <HomeProfileCard
          name="Marjorie Greene"
          imgLink="../assets/patients/patient-1.png"
          age="79"
        ></HomeProfileCard>
        <HomeProfileCard
          name="Marjorie Greene"
          imgLink="../assets/patients/patient-1.png"
          age="79"
        ></HomeProfileCard>
        <HomeProfileCard
          name="Marjorie Greene"
          imgLink="../assets/patients/patient-1.png"
          age="79"
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
    fontWeight: 500,
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
    fontWeight: "500",
    lineHeight: 39,
    letterSpacing: -0.5,
    marginBottom: 16,
  },
});

export default AddScreen;
