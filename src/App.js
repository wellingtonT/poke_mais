import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './components/Home';
import SearchPokemon from './components/SearchPokemon';
import SearchItem from './components/SearchItem';
import SearchMove from './components/SearchMove';
import More from './components/More';

const Stack = createStackNavigator();

export default class App extends Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SearchPokemon"
            component={SearchPokemon}
            options={{
              title: 'Search Pokemon', headerTitleStyle: {
                textAlign: 'center'
              },
            }}
          />
          <Stack.Screen
            name="SearchItem"
            component={SearchItem}
            options={{
              title: 'Search Item', headerTitleStyle: {
                textAlign: 'center'
              },
            }}
          />
          <Stack.Screen
            name="SearchMove"
            component={SearchMove}
            options={{
              title: 'Search Move', headerTitleStyle: {
                textAlign: 'center'
              },
            }}
          />
          <Stack.Screen
            name="More"
            component={ More }
            options={{
              title: 'More', headerTitleStyle: {
                textAlign: 'center'
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

