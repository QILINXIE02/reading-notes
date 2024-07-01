// screens/EventDetailsScreen.js

import React from 'react';
import { ScrollView, Linking } from 'react-native';
import { Box, Heading, Text, Button, VStack, Link } from 'native-base';

const EventDetailsScreen = ({ route }) => {
  const { event, userRole } = route.params;

  const handleContactPress = () => {
    // Handle contact button press, e.g., open email or dialer
    Linking.openURL(`mailto:${event.contact}`);
  };

  const handleSignupPress = () => {
    // Handle event signup button press, e.g., navigate to signup form or open a link
    // Assuming you have an event signup URL
    Linking.openURL(event.signupURL);
  };

  return (
    <ScrollView>
      <Box p={4}>
        <VStack space={4}>
          <Heading>{event.name}</Heading>
          <Text>Location: {event.location}</Text>
          <Text>Time: {event.time}</Text>
          <Text>Details: {event.details}</Text>
          <Text>Hosted by: {event.organization}</Text>
          <Link href={event.organizationWebsite} isExternal>
            <Button onPress={() => Linking.openURL(event.organizationWebsite)}>Visit Organization Website</Button>
          </Link>
          <Text>Contact: {event.contact}</Text>
          <Button onPress={handleContactPress}>Contact</Button>
          <Button onPress={handleSignupPress}>Sign Up for Event</Button>
          <Heading size="md">Skills Needed:</Heading>
          {event.skills.map((skill, index) => (
            <Text key={index}>- {skill}</Text>
          ))}
          {userRole === 'admin' && (
            <VStack space={4}>
              <Heading size="md">Admin Controls</Heading>
              <Button>Edit Event</Button>
              {/* Add other admin controls here */}
            </VStack>
          )}
        </VStack>
      </Box>
    </ScrollView>
  );
};

export default EventDetailsScreen;