import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Linking,
  TouchableOpacity,
} from 'react-native';

import aboutNavigator from './aboutStack';
import homeNavigator from './homeStack';

const MyTheme = {
  dark: true,
  colors: {
    primary: '#d4d4d4',
    text: '#d4d4d4',
  },
};

const Drawer = createDrawerNavigator();

export default function drawerNavigator() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        initialRouteName="Home"
        drawerStyle={{
          backgroundColor: '#201e46',
          width: 300,
        }}>
        <Drawer.Screen name="COLEÇÃO" component={homeNavigator} />
        <Drawer.Screen name="LOJAS" component={homeNavigator} />
        <Drawer.Screen name="VENDEDORES" component={homeNavigator} />
        <Drawer.Screen name="SUPORTE" component={homeNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function CustomDrawerContent(props) {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.containerImage}>
          <Image
            source={require('../assets/images/logo.png')}
            style={{width: 80, height: 60}}
          />
        </View>
        //DrawerItemList representa todas as rotas contidas dentro do menu drawer, por padrão elas recebem alguns estilos que vem através do {...props},
        //portanto, para retirar o destaque de background é só colocar ao lado das props activeBackgroundColor={null} que isso irá sobrepor o estilo padrão.
        <DrawerItemList {...props} activeBackgroundColor={null}  />
      </DrawerContentScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>ALLINSYS</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerImage: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
    //backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    flex: 1,
  },
  footerText: {
    bottom: 20,
    left: 95,
    flex: 1,
    fontSize: 20,
    color: '#6AEA7D',
  },
  imagesView: {
    flex: 1,
    // backgroundColor: '#fff',
    flexDirection: 'row',
  },
  images: {
    marginLeft: 8,
    marginBottom: 10,
  },
});
