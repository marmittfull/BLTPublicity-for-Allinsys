import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {Dimensions} from 'react-native';

export default function Header({navigation, title}) {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.icon} onPress={openMenu}>
        <Image
          source={require('../assets/images/navbar.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <View>
        <Text style={styles.headerText}>Produtos</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get('screen').width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 0,
  },
  headerText: {
    fontSize: 20,
    color: '#201E46',
    letterSpacing: 1,
  },
  icon: {
    width: 30,
    height: 20,
    position: 'absolute',
    left: 10,
  },
});
