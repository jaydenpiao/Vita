import {MiMapView, MapViewStore} from '@mappedin/react-native-sdk';
import {TGetVenueOptions} from '@mappedin/react-native-sdk/core/packages/renderer/index.rn';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

const venueOptions: TGetVenueOptions = {
  venue: 'mappedin-demo-mall',
  clientId: '5eab30aa91b055001a68e996',
  clientSecret: 'RJyRXKcryCMy4erZqqCbuB1NbR66QTGNXVE0x3Pg6oCIlUR1',
};

const Map = () => {
  return (
    <SafeAreaView style={styles.fullSafeAreaView}>
      <MiMapView style={styles.mapView} options={{
        mapId: '65ac4f4704c23e7916b1d0c8',
        key: '65ac610dca641a9a1399dc4b',
        secret: '63fae86d7074a4e4ec75876f92711afd6e93d9e5f6b5609933808e6dabbad40b',
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

export default Map;