import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {globalStyles} from '../styles/global';
import Card from '../shared/card';
import {Rating, AirbnbRating} from 'react-native-ratings';

import {Dimensions} from 'react-native';

export default function Promo({route, navigation}) {
  const {nome} = route.params;
  const {promoImg} = route.params;
  const {categoria} = route.params;
  const {codigo} = route.params;
  const {preco} = route.params;
  const {descricao} = route.params;
  const {avaliacao} = route.params;

  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <ImageBackground
      source={require('../assets/images/bg_screen.png')}
      style={globalStyles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.navigate('Home')}>
          <Image
            source={require('../assets/images/arrow.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <View>
          <Text style={styles.headerText}>PRODUTOS</Text>
        </View>
      </View>

      <View style={globalStyles.cardContainer}>
        <Image
          source={promoImg}
          style={{
            width: 220,
            height: 220,
            alignSelf: 'center',
            resizeMode: 'contain',
            alignSelf: 'center',
          }}
        />
        <View style={globalStyles.tamanho}>
          <Text style={globalStyles.categoriaTextCenter}> {categoria} </Text>
          <Text style={globalStyles.cardTextCenter}> {nome} </Text>
          <Text style={globalStyles.categoriaTextCenter}> {codigo} </Text>
          <Rating
            type="custom"
            ratingCount={5}
            ratingColor="#6AEA7D"
            selectedColor="#6AEA7D"
            ratingBackgroundColor="#BDBDBD"
            tintColor="#fff"
            startingValue={avaliacao}
            imageSize={15}
            style={{top: 1}}
          />

          <Text style={globalStyles.precoText}> {preco} </Text>
        </View>
        <ScrollView style={globalStyles.tamanho2}>
          <Text style={globalStyles.normalTextJustifB}> {descricao} </Text>
        </ScrollView>
      </View>

      <View style={globalStyles.container}>
        <Image
          source={require('../assets/images/logo.png')}
          style={globalStyles.footerImg}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d4d4d4',
    paddingVertical: 30,
  },
  footerImg: {
    width: 76,
    height: 58,
    left: 150,
    bottom: 5,
  },
  header: {
    width: Dimensions.get('screen').width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 0,
    marginTop: 35,
    marginBottom: 30,
  },
  headerText: {
    fontSize: 20,
    color: '#201E46',
    letterSpacing: 1,
    fontFamily: 'GOTHAM-BOLD',
    fontWeight: 'bold',
    right: 15,
  },
  icon: {
    width: 30,
    height: 20,
    position: 'absolute',
    left: 0,
  },
  avaliacao: {
    position: 'absolute',
    left: 0,
    bottom: 50,
  },
});
