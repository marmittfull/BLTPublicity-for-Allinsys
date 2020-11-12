import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';
import Promo from '../screens/promo';
import Configs from '../screens/configs';
import Header from '../shared/header';

const homeStack = ({navigation}) => {
  const Stack = createStackNavigator();
  Stack.Navigator.defaultProps = {
    headerMode: 'none',
  };
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#d4d4d4',
        },
        headerTintColor: '#201E46',
        headerTitleAlign: 'center',
        cardShadowEnabled: false,
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => <Header navigation={navigation} />,
        }}
      />

      <Stack.Screen
        name="Promo"
        component={Promo}
        options={{title: 'Promoções'}}
      />
    </Stack.Navigator>
  );
};

export default homeStack;
