import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from './src/app/Home';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from '@/app/components/Header';
import Footer from "./src/app/components/Footer";


import RegisterUser from "./src/app/Register/index";
import Login from './src/app/Login';
import { store } from "./src/utils/store";
import { Provider } from "react-redux";

const StackNavigation = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigation.Navigator initialRouteName="Login">
          <StackNavigation.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <StackNavigation.Screen
            name="Home"
            component={Home}
            options={({ navigation }) => ({
              header: () => <Header title="Home" onMenuPress={() => {}} />,
            })}
          />

          <StackNavigation.Screen
            name="RegisterUser"
            component={RegisterUser}
            options={({ navigation }) => ({
              header: () => (
                <Header
                  title="RegisterUser"
                  onMenuPress={() => {}}
                  canGoBack={navigation.canGoBack()}
                />
              ),
                })}
          />
        </StackNavigation.Navigator>
      </NavigationContainer>
    </Provider>
  );
}