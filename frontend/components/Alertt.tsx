import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Alertt = ({ route }) => {
  const navigation = useNavigation();
  const { patientId } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Alert: Patient {patientId} is having a heart attack!</Text>
      <Button 
        title={`Save Patient ${patientId}!`}
        onPress={() => navigation.navigate("Map", { patientId: patientId })}
      />
    </View>
  );
}

export default Alertt;
