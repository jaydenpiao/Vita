import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function Map() {
	return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome!</Text>
            <Text style={styles.text}> to our app.</Text>
        </View>
	);
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 16,
      marginBottom: 20,
    },
  });

export default Map;