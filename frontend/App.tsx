import React from 'react';
import { View, StyleSheet } from 'react-native';
import Welcome from './components/Welcome';

const App = () => {
  return (
    <View style={styles.container}>
      <Welcome />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default App;