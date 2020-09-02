import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './components/login';
import Signup from './components/signup';
import Group from './components/group';
import Welcome from './components/Welcome';
import Dashboard from './components/dashboard';
import trip from './components/trip';
import journey from './components/journey';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Signup"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: 'gray',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen 
        name="Signup" 
        component={Signup} 
        options={{ title: 'Signup' }}
      />       
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={
          {title: 'Login'},
          {headerLeft: null} 
        }
      />
      <Stack.Screen 
        name="Group" 
        component={Group} 
        options={
          {title: 'Group'},
          {headerLeft: null} 
        }
      />
      <Stack.Screen 
        name="Welcome" 
        component={Welcome} 
        options={
          {title: 'Welcome'},
          {headerLeft: null} 
        }
      />
      
      <Stack.Screen 
       name="Dashboard" 
       component={Dashboard} 
       options={
         { title: 'Dashboard' },
         {headerLeft: null} 
       }
      />
      <Stack.Screen 
       name="trip" 
       component={trip} 
       options={
         { title: 'trip' },
         {headerLeft: null} 
       }
      />
      {/* <Stack.Screen 
       name="journey" 
       component={journey} 
       options={
         { title: 'Journey' },
         {headerLeft: null} 
       }
      /> */}
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}