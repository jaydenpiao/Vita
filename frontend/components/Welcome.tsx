import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome!</Text>
      <Text style={styles.text}>This is an introduction to our app.</Text>
      {/* Button with no functionality yet */}
      <Button title="Next" onPress={() => {}} />
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

export default Welcome;