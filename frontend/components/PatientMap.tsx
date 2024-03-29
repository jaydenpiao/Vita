import {MiMapView, MapViewStore, MappedinLocation, MappedinPolygon} from '@mappedin/react-native-sdk';
import { getVenueMaker } from '@mappedin/react-native-sdk/core/packages/get-venue';
import {TGetVenueOptions} from '@mappedin/react-native-sdk/core/packages/renderer/index.rn';
import React, {useRef, useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

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

const PatientMap = () => {
  const mapView = React.useRef<MapViewStore>(null);
  const [patient1, setPatient1] = useState('HEARTH ROOM');
  const [patient2, setPatient2] = useState('ROOM 1');
  const [patient3, setPatient3] = useState('KITCHEN');
  const [patient4, setPatient4] = useState('PATIO');
  const [patient5, setPatient5] = useState('BATH 3');

  // function to fetch randomized patient room every ~10s to simulate patient moving
  // const fetchRoomNameFromServer = async () => {
  //   const newRoomName = await getRoomNameFromServer();
  //   setDestination(newRoomName);
  // };

  // useEffect(() => {
  //   fetchRoomNameFromServer();
  //   const intervalId = setInterval(() => {
  //     fetchRoomNameFromServer();
  //   }, 10000); // Fetch every 10 seconds
  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    <SafeAreaView style={styles.fullSafeAreaView}>
      <MiMapView style={styles.mapView} ref={mapView} options={{
        mapId: '65ac4f4704c23e7916b1d0c8',
        key: '65ac610dca641a9a1399dc4b',
        secret: '63fae86d7074a4e4ec75876f92711afd6e93d9e5f6b5609933808e6dabbad40b',
        }} 
        onFirstMapLoaded={() => {
            

            
                
            
          const departure = mapView.current?.venueData?.locations.find(
            (l: MappedinLocation) => l.name === 'PANTRY',
          );
          const destination = mapView.current?.venueData?.locations.find(
            (l: MappedinLocation) => l.name === patient1,
          );
          if (!departure || !destination) {
            return;
          }

        //   mapView.current?.BlueDot.enable();
        //   mapView.current?.overrideLocation()

        //   const directions = departure?.directionsTo(destination);
        //   if (directions) {
        //     mapView.current?.Journey.draw(directions);
        //     // mapView.current?.Camera.focusOn(departure); // zooms in on current location
            
        //   }
          mapView.current?.Camera.set({
            rotation: 2.45,
            zoom: 1600,
            tilt: 0,
          });
          console.log(directions.instructions);
          console.log(directions.path);
          
          // console.log(departure.description);
          // console.log(destination.polygons);
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
});

export default PatientMap;

