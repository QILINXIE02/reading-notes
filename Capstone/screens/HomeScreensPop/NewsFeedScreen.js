import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NewsFeedScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>News Feed</Text>
      <Text style={styles.text}>Latest news and updates will appear here.</Text>
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

export default NewsFeedScreen;
