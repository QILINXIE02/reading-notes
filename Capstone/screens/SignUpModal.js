import React from 'react';
import { View, Text, Button, StyleSheet, Modal } from 'react-native';

const SignUpModal = ({ navigation }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={() => navigation.goBack()}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up for an Event</Text>
        {/* Add sign-up form fields */}
        <Button title="Close" onPress={() => navigation.goBack()} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#fff',
  },
});

export default SignUpModal;
