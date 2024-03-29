import {MiMapView, MapViewStore, MappedinLocation, MappedinPolygon} from '@mappedin/react-native-sdk';
import { getVenueMaker } from '@mappedin/react-native-sdk/core/packages/get-venue';
import {TGetVenueOptions} from '@mappedin/react-native-sdk/core/packages/renderer/index.rn';
import React, {useRef, useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { db } from '../db/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';


const venueOptions: TGetVenueOptions = {
  venue: 'mappedin-demo-mall',
  clientId: '5eab30aa91b055001a68e996',
  clientSecret: 'RJyRXKcryCMy4erZqqCbuB1NbR66QTGNXVE0x3Pg6oCIlUR1',
};

const rooms = ['ROOM 1', 'ROOM 2', 'ROOM 3', 'ROOM 4', 'ROOM 5', 'ROOM 6', 'ROOM 7', 'ROOM 8', 'ROOM 9', 'ROOM 10', 'ROOM 11', 'ROOM 12',
              'BATH 1', 'BATH 2', 'BATH 3', 'BATH 4', 'BATH 5', 'BATH 6', 'BATH 7', 'BATH 8', 'BATH 9', 'BATH 10', 'BATH 11', 'BATH 12',
              'CLOSET A', 'CLOSET B', 'CLOSET C', 'CLOSET D',
              'MECHANICAL ROOM A', 'MECHANICAL ROOM B',
              'UTILITY ROOM A', 'UTILITY ROOM B',
              'SPA', 'SPA BATH',
              'KITCHEN', 'PANTRY',
              'PATIO', 'PORCH',
              'HEARTH ROOM', 'DINING ROOM', 'LIBRARY'];

const Map = () => {
  const mapView = React.useRef<MapViewStore>(null);
  const [destinationRoom, setDestinationRoom] = useState('ROOM 5'); 
  const navigation = useNavigation();

  const route = useRoute();
  const patientId = route.params?.patientId ?? '0';
  
  // Function to fetch patient data from Firestore
  const fetchPatientData = async () => {
    try {
      const docRef = doc(db, 'patients', patientId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // console.log("Patient 0's Location:", docSnap.data().location);
        setDestinationRoom(docSnap.data().location);

        // Check for 'is_having_heart_attack' field
        if (docSnap.data().is_having_heart_attack) {
          // console.log(`Patient ${patientId} is having a heart attack!`);
          // navigation.navigate("Alertt", {patientId: patientId});
      } 
    } else {
        console.log('No such document!');
      }
    } catch (error) {
      // console.error('Error fetching patient data:', error);
    }
  };

  // Run fetchPatientData every 10 seconds
  // setInterval(fetchPatientData, 10000);

  useEffect(() => {
    fetchPatientData();
  }, []);

  return (
    <SafeAreaView style={styles.fullSafeAreaView}>
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.navigate('AddScreen')}
      >
        <Text>Back</Text>
      </TouchableOpacity>
      <MiMapView style={styles.mapView} ref={mapView} options={{
        mapId: '65ac4f4704c23e7916b1d0c8',
        key: '65ac610dca641a9a1399dc4b',
        secret: '63fae86d7074a4e4ec75876f92711afd6e93d9e5f6b5609933808e6dabbad40b',
        }} 
        onFirstMapLoaded={() => {
          const departure = mapView.current?.venueData?.locations.find(
            (l: MappedinLocation) => l.name === 'SPA BATH',
          );
          const destination = mapView.current?.venueData?.locations.find(
            (l: MappedinLocation) => l.name === destinationRoom,
          );
          if (!departure || !destination) {
            return;
          }
          const directions = departure?.directionsTo(destination);
          if (directions) {
            mapView.current?.Journey.draw(directions, {
              pathOptions: {
                nearRadius: 0.5,
              }
            });
            
          }
          mapView.current?.Camera.set({
            rotation: 2.45,
            zoom: 1600,
            tilt: 0,
          });
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fullSafeAreaView: {
    flex: 1,
  },
  mapView: {
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 10,
    padding: 10,
    zIndex: 1, // Ensure button is above the map
    backgroundColor: 'white', // Change as needed
    borderRadius: 5, // Optional for rounded corners
  },
});

export default Map;

