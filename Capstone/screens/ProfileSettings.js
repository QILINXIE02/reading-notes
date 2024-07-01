import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileSettings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Settings</Text>
      {/* Add form fields for profile settings */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default ProfileSettings;
