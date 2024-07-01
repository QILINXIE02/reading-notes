import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CreateEvent = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Event</Text>
      {/* Add your form or components to create an event */}
      <Button title="Save" onPress={() => navigation.goBack()} />
    </View>
  );
};

// const newEvent = {
//   id: (events.length + 1).toString(),
//   name: newEventName,
//   date: newEventDate,
//   location: newEventLocation,
//   time: 'TBD', // Set default or let user input
//   skills: [], // Add a way to input skills if needed
//   details: '', // Add a way to input details if needed
//   contact: '', // Add a way to input contact if needed
//   locationLatitude: 0, // Set default or let user input
//   locationLongitude: 0, // Set default or let user input
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default CreateEvent;
