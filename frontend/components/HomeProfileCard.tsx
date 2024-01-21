import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Image } from "react-native";

type ProfileProps = {
  imgLink: string;
  name: string;
  age: string;
};

const HomeProfileCard = (props: ProfileProps) => {
  return (
    <View style={styles.homeProfileCard}>
      <Image
        style={styles.img}
        source={require("../assets/patients/patient-1.png")}
      ></Image>
      <View>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.age}>{props.age} years old</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 52,
    height: 52,
  },
  homeProfileCard: {
    display: "flex",
    gap: 12,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  name: {
    fontSize: 17,
    marginBottom: 4,
  },
  age: {
    fontSize: 14,
    opacity: 0.6,
  },
});

export default HomeProfileCard;
