import React, {useState} from "react";
import { Text, View, StyleSheet } from "react-native";
import { Image } from "react-native";
import CheckBox from '@react-native-community/checkbox';

type ProfileProps = {
  imgLink: string;
  name: string;
  age: string;
  bpm: string;
};

const HomeProfileCard = (props: ProfileProps) => {
  const [isSelected, setSelection] = useState(false);
  
  return (
    <View style={styles.homeProfileCard}>
      <Image
        style={styles.img}
        source={require("../assets/patients/patient-1.png")}
      />
      <View>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.age}>{props.age} years old</Text>
      </View>
      <View>
        <Image style={styles.heartrate} source={require("../assets/heartrate.jpeg")} />
        <Text style={styles.bpm}>Bpm: {props.bpm}</Text>
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
    justifyContent: "space-between",
    marginBottom: 10,
    paddingBottom: 20,
    paddingTop: 12,
    paddingLeft: 15,
    paddingRight: 8,
    borderWidth: 0.2,
    borderRadius: 10,
    borderColor: "gray",
  },
  name: {
    fontSize: 17,
    marginBottom: 4,
  },
  age: {
    fontSize: 14,
    opacity: 0.6,
  },
  heartrate: {
    // marginTop: 10,
    marginLeft: 20,
    width: 100,
    height: 80,
    // justifyContent: "flex-end"
  },
  bpm: {
    textAlign: "right",
    paddingRight: 5
  }
});

export default HomeProfileCard;
