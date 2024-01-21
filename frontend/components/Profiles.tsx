import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProfileCard from './ProfileCard'; // Adjust the import path as needed
import Icon from '../assets/icon.png';

const profiles = [
  {
    avatar: Icon,
    name: 'John Doe',
    email: 'john.doe@example.com',
    gender: 'M',
    age: 60
  },
  {
    avatar: Icon,
    name: 'John Doe',
    email: 'john.doe@example.com',
    gender: 'M',
    age: 60
  },
  {
    avatar: Icon,
    name: 'John Doe',
    email: 'john.doe@example.com',
    gender: 'M',
    age: 60
  },
  {
    avatar: Icon,
    name: 'John Doe',
    email: 'john.doe@example.com',
    gender: 'M',
    age: 60
  },
  {
    avatar: Icon,
    name: 'John Doe',
    email: 'john.doe@example.com',
    gender: 'M',
    age: 60
  },
];

export default function Profiles() {
  return (
    <View style={styles.container}>
      {profiles.map((profile, index) => (
        <ProfileCard
          key={index}
          avatar={profile.avatar}
          name={profile.name}
          email={profile.email}
          gender={profile.gender}
          age={profile.age}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
  },
});
