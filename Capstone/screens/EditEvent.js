import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const EditEvent = ({ route, navigation }) => {
  const { eventId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Event: {eventId}</Text>
      {/* Add your form or components to edit an event */}
      <Button title="Save" onPress={() => navigation.goBack()} />
    </View>
  );
};

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

export default EditEvent;
