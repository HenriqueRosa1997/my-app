import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/app/Home/index';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

const StackNavigation = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation.Navigator
        initialRouteName="Home"
      >
        <StackNavigation.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            header: () => (
              <Header title="Home" onMenuPress={() => {}} />
            ),
          })}
        />
      </StackNavigation.Navigator>
    </NavigationContainer>
  );
}
        