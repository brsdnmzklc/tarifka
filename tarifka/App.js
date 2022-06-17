import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CategoriesScreen from './src/screens/CategoriesScreen';
import MealsScreen from './src/screens/MealsScreen';
import MealsDetailScreen from './src/screens/MealsDetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
        <Stack.Screen name="MealsScreen" component={MealsScreen} />
        <Stack.Screen name="MealsDetailScreen" component={MealsDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
