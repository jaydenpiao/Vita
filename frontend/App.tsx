import React, { useEffect } from 'react';
import { View, StyleSheet, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AddScreen from "./screens.tsx/AddScreen";

import Welcome from "./components/Welcome";
import Tutorial2 from "./screens.tsx/Tutorial2";
import Profiles from "./components/Profiles";
import RequestNotifs from "./screens.tsx/Tutorial3";
import Tutorial1 from "./components/Tutorial1";
import Map from "./components/Map";
import useNavigation from "@react-navigation/native";
import HomeEmpty from "./screens.tsx/HomeEmpty";
import Tutorial3 from "./screens.tsx/Tutorial3";

import { db } from './db/firebaseConfig';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import Alertt from './components/Alertt';





const Stack = createNativeStackNavigator();

export default function App() {

  // const navigation = useNavigation();

  // useEffect(() => {
  //   const q = query(collection(db, 'patients'), where('is_having_heart_attack', '==', true));
  //   const unsubscribe = onSnapshot(q, (snapshot) => {
  //     snapshot.docChanges().forEach((change) => {
  //       if (change.type === "added" || change.type === "modified") {
  //         navigation.navigate('Map', { showOverlay: true });
  //       }
  //     });
  //   });

  //   return () => unsubscribe(); // Clean up the listener
  // }, []);


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profiles"
          options={{ headerShown: false }}
          component={Profiles}
        />
        <Stack.Screen
          name="Map"
          options={{ headerShown: false }}
          component={Map}
        />
        <Stack.Screen
          name="Tutorial1"
          options={{ headerShown: false }}
          component={Tutorial1}
        />
        <Stack.Screen
          name="Tutorial2"
          options={{ headerShown: false }}
          component={Tutorial2}
        />
        <Stack.Screen
          name="Tutorial3"
          options={{ headerShown: false }}
          component={Tutorial3}
        />
        <Stack.Screen
          name="HomeEmpty"
          options={{ headerShown: false }}
          component={HomeEmpty}
        />
        <Stack.Screen
          name="AddScreen"
          options={{ headerShown: false }}
          component={AddScreen}
        />
        <Stack.Screen
          name="Alertt"
          options={{ headerShown: false }}
          component={Alertt}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
