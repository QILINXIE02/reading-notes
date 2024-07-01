// EventCalendarScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EventCalendarScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Event Calendar</Text>
      <Text style={styles.text}>View upcoming events and volunteer opportunities.</Text>
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
});

export default EventCalendarScreen;
