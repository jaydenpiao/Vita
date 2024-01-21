import {MiMapView, MapViewStore, MappedinLocation} from '@mappedin/react-native-sdk';
import { getVenueMaker } from '@mappedin/react-native-sdk/core/packages/get-venue';
import {TGetVenueOptions} from '@mappedin/react-native-sdk/core/packages/renderer/index.rn';
import React, {useRef, useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

const venueOptions: TGetVenueOptions = {
  venue: 'mappedin-demo-mall',
  clientId: '5eab30aa91b055001a68e996',
  clientSecret: 'RJyRXKcryCMy4erZqqCbuB1NbR66QTGNXVE0x3Pg6oCIlUR1',
};

const Map = () => {
  const mapView = React.useRef<MapViewStore>(null);
  const [destinationRoom, setDestinationRoom] = useState('LIBRARY');

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
    // <SafeAreaView style={styles.fullSafeAreaView}>
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
            (l: MappedinLocation) => l.name === destinationRoom,
          );
          if (!departure || !destination) {
            return;
          }
          const directions = departure?.directionsTo(destination);
          if (directions) {
            mapView.current?.Journey.draw(directions);
          }
        }}
      />
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fullSafeAreaView: {
    flex: 1,
  },
  mapView: {
    flex: 1,
    transform: [
      { scale: 1.25 },
    ],
  },
});

export default Map;

