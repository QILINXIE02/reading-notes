import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import AdminDashboard from './AdminScreens/AdminDashboard';
import VolunteerDashboard from './screens/VolunteerDashboard';
import ProfileSettings from './screens/ProfileSettings';
import EventScreen from './screens/EventScreen';
import SignUpModal from './screens/SignUpModal';
import CreateEvent from './screens/CreateEvent';
import EditEvent from './screens/EditEvent';
import VolunteerOpportunitiesScreen from './screens/HomeScreensPop/VolunteerOpportunitiesScreen';
import EventCalendarScreen from './screens/HomeScreensPop/EventCalendarScreen';
import NewsFeedScreen from './screens/HomeScreensPop/NewsFeedScreen';
import NonprofitProfileScreen from './screens/HomeScreensPop/NonprofitProfileScreen';

import { ThemeProvider } from './context/ThemeContext';
import { NonprofitProfileProvider } from './context/NonprofitProfileContext';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
      tabBarActiveTintColor: 'blue',
      tabBarInactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="VolunteerDashboard"
      component={VolunteerDashboard}
      options={{
        tabBarLabel: 'Dashboard',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        tabBarLabel: 'Settings',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="cog" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Admin"
      component={AdminDashboard}
      options={{
        tabBarLabel: 'Admin',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account-settings" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

const AuthStack = () => (
  <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Splash" component={SplashScreen} />
    <Stack.Screen name="HomeScreen" component={MainTabNavigator} />
    <Stack.Screen name="EventScreen" component={EventScreen} />
    <Stack.Screen name="ProfileSettings" component={ProfileSettings} />
    <Stack.Screen name="SignUpModal" component={SignUpModal} />
    <Stack.Screen name="CreateEvent" component={CreateEvent} />
    <Stack.Screen name="EditEvent" component={EditEvent} />
    <Stack.Screen name="VolunteerOpportunities" component={VolunteerOpportunitiesScreen} />
    <Stack.Screen name="EventCalendar" component={EventCalendarScreen} />
    <Stack.Screen name="NewsFeed" component={NewsFeedScreen} />
    <Stack.Screen name="NonprofitProfileScreen" component={NonprofitProfileScreen} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <ThemeProvider>
      <NonprofitProfileProvider>
        <NavigationContainer>
          <AuthStack />
        </NavigationContainer>
      </NonprofitProfileProvider>
    </ThemeProvider>
  );
};

export default App;
