import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Sobre from '../screens/sobre';
import Header from '../shared/header';

const Stack = createStackNavigator();

const aboutStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="Sobre"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#d4d4d4',
        },
        headerTintColor: '#d4d4d4',
        headerTitleAlign: 'center',
        cardShadowEnabled: false,
      }}>
      <Stack.Screen
        name="Sobre"
        component={Sobre}
        options={{
          headerTitle: () => (
            <Header navigation={navigation} title="Sobre o Projeto" />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default aboutStack;
