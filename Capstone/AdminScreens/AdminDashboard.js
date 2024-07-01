import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, Modal, TextInput } from 'react-native';
import { useTheme } from '../context/ThemeContext'; // Adjust the path as necessary

const mockEvents = [
  { id: '1', name: 'Food Drive', date: '2024-07-01', location: 'Community Center' },
  { id: '2', name: 'Park Cleanup', date: '2024-07-15', location: 'City Park' },
];

const AdminDashboard = ({ navigation }) => {
  const { isDarkMode } = useTheme();
  const [events, setEvents] = useState(mockEvents);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newEventName, setNewEventName] = useState('');
  const [newEventDate, setNewEventDate] = useState('');
  const [newEventLocation, setNewEventLocation] = useState('');

  const handleCreateEvent = () => {
    const newEvent = {
      id: (events.length + 1).toString(),
      name: newEventName,
      date: newEventDate,
      location: newEventLocation,
    };
    setEvents([...events, newEvent]);
    setIsModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <View style={isDarkMode ? styles.eventItemDark : styles.eventItem}>
      <Text style={isDarkMode ? styles.eventNameDark : styles.eventName}>{item.name}</Text>
      <Text style={isDarkMode ? styles.textDark : styles.text}>{item.date}</Text>
      <Text style={isDarkMode ? styles.textDark : styles.text}>{item.location}</Text>
      <Button
        title="Edit"
        onPress={() => navigation.navigate('EditEvent', { eventId: item.id })}
      />
    </View>
  );

  return (
    <View style={isDarkMode ? styles.containerDark : styles.container}>
      <Text style={isDarkMode ? styles.titleDark : styles.title}>Admin Dashboard</Text>
      <Button
        title="Create Event"
        onPress={() => setIsModalVisible(true)}
      />
      <FlatList
        data={events}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      {/* Modal for creating a new event */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Create New Event</Text>
            <TextInput
              style={styles.input}
              placeholder="Event Name"
              value={newEventName}
              onChangeText={text => setNewEventName(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Event Date"
              value={newEventDate}
              onChangeText={text => setNewEventDate(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Event Location"
              value={newEventLocation}
              onChangeText={text => setNewEventLocation(text)}
            />
            <Button title="Create" onPress={handleCreateEvent} />
            <Button title="Cancel" onPress={() => setIsModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  containerDark: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
  titleDark: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
  eventItem: {
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  eventItemDark: {
    padding: 20,
    backgroundColor: '#333',
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  eventName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  eventNameDark: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  text: {
    color: '#000',
  },
  textDark: {
    color: '#fff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default AdminDashboard;
