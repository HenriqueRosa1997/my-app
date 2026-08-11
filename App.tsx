import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from './src/app/Home';
import Login from './src/app/Login';
import Header from '@/app/components/Header';

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

const StackNavigation =
  createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation.Navigator initialRouteName="Login">

        <StackNavigation.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />

        <StackNavigation.Screen
          name="Home"
          component={Home}
          options={{
            header: () => (
              <Header
                title="Home"
                onMenuPress={() => {}}
              />
            ),
          }}
        />

      </StackNavigation.Navigator>
    </NavigationContainer>
  );
}