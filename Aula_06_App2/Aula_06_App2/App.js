import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/home';
import AboutScreen from './screens/about';

const Tab = createBottomTabNavigator();

function App() {
  return (
  <NavigationContainer>
    <Tab.Navigator>
    <Tab.Screen name='home' component={HomeScreen} />
    <Tab.Screen name='about' component={AboutScreen} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}

export default App;