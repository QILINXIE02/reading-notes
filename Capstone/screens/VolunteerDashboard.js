import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const VolunteerDashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Volunteer Dashboard</Text>
      <Button
        title="Sign Up for an Event"
        onPress={() => navigation.navigate('SignUpModal')}
      />
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

export default VolunteerDashboard;
