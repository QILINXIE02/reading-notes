// src/components/screens/VolunteerOpportunitiesScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNonprofitProfileContext } from '../../context/NonprofitProfileContext';

const VolunteerOpportunitiesScreen = () => {
  const { nonprofitProfiles } = useNonprofitProfileContext();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Volunteer Opportunities</Text>
      <Text style={styles.text}>Browse and sign up for volunteer opportunities.</Text>

      {nonprofitProfiles.map((profile, index) => (
        <View key={index} style={styles.profileContainer}>
          <Text style={styles.profileTitle}>{profile.orgName}</Text>
          <Text>Mission: {profile.missionStatement}</Text>
          <Text>Contact: {profile.contactInfo}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  profileContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
    width: '80%',
  },
  profileTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default VolunteerOpportunitiesScreen;
