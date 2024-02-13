import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { db } from '../db/firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';

const Alertt = ({ route }) => {
  const navigation = useNavigation();
  const { patientId } = route.params;

  const handleSavePatient = async () => {
    const patientRef = doc(db, 'patients', patientId);

    try {
      await updateDoc(patientRef, {
        is_having_heart_attack: false
      });
      console.log(`Patient ${patientId}'s status updated successfully.`);
      navigation.navigate("Map", { patientId: patientId });
    } catch (error) {
      console.error("Error updating patient's status: ", error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Alert: Patient {patientId} is having a heart attack!</Text>
      <Button 
        title={`Save Patient ${patientId}!`}
        onPress={handleSavePatient}
      />
    </View>
  );
}

export default Alertt;
