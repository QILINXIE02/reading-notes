import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { useNonprofitProfileContext } from '../../context/NonprofitProfileContext'; // Ensure correct import path

const NonprofitProfileScreen = ({ navigation }) => {
  const { addNonprofitProfile } = useNonprofitProfileContext(); // Ensure you're correctly accessing the context
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

    addNonprofitProfile(nonprofitProfile);

    Alert.alert('Success', 'Nonprofit profile created successfully. Your org. profile will be displayed in the  "Browse Volunteer Opportunities screen (in our Home Screen) ! 😊 ');
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
    <View style={styles.container}>
      <Text style={styles.title}>Nonprofit Profile Creation</Text>

      <TextInput
        style={styles.input}
        placeholder="Organization Name"
        value={orgName}
        onChangeText={text => setOrgName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Mission Statement"
        multiline
        numberOfLines={4}
        value={missionStatement}
        onChangeText={text => setMissionStatement(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contact Information"
        value={contactInfo}
        onChangeText={text => setContactInfo(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Project Description"
        multiline
        numberOfLines={4}
        value={projectDescription}
        onChangeText={text => setProjectDescription(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Logo URL"
        value={logoUrl}
        onChangeText={text => setLogoUrl(text)}
      />

      <Button title="Create Profile" onPress={handleProfileCreation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
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
});

export default NonprofitProfileScreen;
