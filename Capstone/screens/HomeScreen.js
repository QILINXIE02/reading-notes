import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, TextInput, Button, Alert } from 'react-native';
import { useTheme } from '../context/ThemeContext';

import NonprofitProfileScreen from './HomeScreensPop/NonprofitProfileScreen'; // Ensure correct import path

const HomeScreen = ({ navigation }) => {
  const { isDarkMode } = useTheme();
  const [orgName, setOrgName] = useState('');
  const [missionStatement, setMissionStatement] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [logoUrl, setLogoUrl] = useState('');
  const [otherImages, setOtherImages] = useState([]);

  const handleProfileCreation = () => {
    if (!orgName || !missionStatement || !contactInfo || !projectDescription) {
      Alert.alert('Error', 'Please fill in all required fields.');
      return;
    }

    const nonprofitProfile = {
      orgName,
      missionStatement,
      contactInfo,
      projectDescription,
      logoUrl,
      otherImages,
    };

    Alert.alert('Success', 'Nonprofit profile created successfully.');
    resetForm();
  };

  const resetForm = () => {
    setOrgName('');
    setMissionStatement('');
    setContactInfo('');
    setProjectDescription('');
    setLogoUrl('');
    setOtherImages([]);
  };

  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.backgroundImage}
    >
      <View style={isDarkMode ? styles.containerDark : styles.container}>
        <Text style={isDarkMode ? styles.titleDark : styles.title}>Welcome to VolunteerBridge</Text>

        {/* Button to navigate to NonprofitProfileScreen */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NonprofitProfileScreen')}>
          <Text style={styles.buttonText}>Create Nonprofit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('VolunteerOpportunities')}>
          <Text style={styles.buttonText}>Browse Volunteer Opportunities</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EventCalendar')}>
          <Text style={styles.buttonText}>View Event Calendar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NewsFeed')}>
          <Text style={styles.buttonText}>Check News and Updates</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  containerDark: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  titleDark: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#bbb',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    width: '100%',
  },
  inputDark: {
    borderWidth: 1,
    borderColor: '#444',
    backgroundColor: '#333',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    width: '100%',
    color: '#fff',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
