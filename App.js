import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './components/LandingPage';
import LoginForm from './components/LoginScreen';
import HomePage from './components/homePage';
import Dashboard from './components/realDataDashboard';
import CreateAccountScreen from './components/CreateAccountScreen';
import Details from './components/Details';
import DeviceDetails from './components/DevicesDetails';
import AddLogicScreen from './components/AddLogicScreen';
import Profile from './components/ProfileEditingScreen';
import WelcomeScreen from './welcomeScreen';
import AddDeviceModal from './components/subComponents/AddDeviceModal';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginForm} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="DeviceDetails" component={DeviceDetails} />
        <Stack.Screen name="AddLogicScreen" component={AddLogicScreen} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="AddDevice" component={AddDeviceModal} />
  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
