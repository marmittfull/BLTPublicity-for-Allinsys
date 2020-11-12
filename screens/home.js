import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Image,
  Button,
  PermissionsAndroid,
  Footer,
  ImageBackground,
} from 'react-native';

import {Dimensions} from 'react-native';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {globalStyles} from '../styles/global';
import Card from '../shared/card';
import {DeviceEventEmitter} from 'react-native';
import Beacons from 'react-native-beacons-manager';
import firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database';

Beacons.detectIBeacons();

export default function Home({navigation}) {
  const [reviews, setReviews] = useState([]);
  const [message, setMessage] = useState(' ');
  const [uuid, setUuid] = useState({});
  const [dados, setDados] = useState([{}]);
  const [dist, setDist] = useState(0);
  const [deltadist, setDeltatdist] = useState(0);
  const [dadosTemp, setDadosTemp] = useState([]);

  const requestCameraPermission = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
  };

  useEffect(() => {
    requestCameraPermission();

    const dadosTempRef = database().ref('/Produtos');
    const OnLoadingListener = dadosTempRef.on('value', (snapshot) => {
      setDadosTemp([]);
      snapshot.forEach(function (childSnapshot) {
        setDadosTemp((dadosTemp) => [...dadosTemp, childSnapshot.val()]);
      });
    });

    return () => {
      dadosTempRef.off('value', OnLoadingListener);
    };
  }, []);

  async function rebea() {
    try {
      await Beacons.startRangingBeaconsInRegion('REGION1');
      console.log(`Beacons ranging started succesfully!`);
    } catch (err) {
      console.log(`Beacons ranging not started, error: ${error}`);
    }
  }

  const RemoveReview = (position) => {
    const newReviews = reviews;
    newReviews.splice(position, 1);
    setReviews(newReviews);
  };

  async function rebeaStop() {
    try {
      await Beacons.stopRangingBeaconsInRegion('REGION1');
      console.log(`Beacons ranging stopped succesfully!`);
    } catch (err) {
      console.log(`Beacons ranging not stopped, error: ${error}`);
    }
  }

  function zera() {
    setDist(0);
    setDeltatdist(0);
  }

  useEffect(() => {
    setTimeout(() => {
      rebea();
    }, 3000);
    DeviceEventEmitter.addListener('beaconsDidRange', (data) => {
      setTimeout(() => {
        setDados(data.beacons);
      }, 1000);
      if (data.beacons.length > 0) {
        var codigos = [];

        for (let index = 0; index < data.beacons.length; index++) {
          codigos[index] = data.beacons[index].uuid;
        }
        //setUuid(codigos)
        setTimeout(() => {
          setUuid(codigos);
        }, 1000);
        //console.log(dados);
      } else {
        setTimeout(() => {
          setUuid({});
        }, 1000);
      }
    });
  }, []);

  function saveToCards(beaconId, card, key) {
    let verific = 0;
    let teste = 0;

    if (uuid.length > 0) {
      for (let index = 0; index < uuid.length; index++) {
        if (uuid[index] == beaconId) {
          for (let i = 0; i < reviews.length; i++) {
            if (reviews[i].key == key) {
              teste = 1;
              verific = 1;
            }
          }

          if (teste == 0) {
            setReviews([...reviews, card]);
            verific = 1;
          }
        }
      }
    }

    if (verific == 0 && reviews.length > 0) {
      for (let index = 0; index < reviews.length; index++) {
        if (reviews[index].key == key) {
          RemoveReview(index);
        }
      }
    }
    if (reviews.length == 0) {
      setMessage('Nenhuma Promoção Detectada, Continue Procurando!');
    } else {
      setMessage(' ');
    }
  }

  const openMenu = () => {
    navigation.openDrawer();
  };

  useEffect(() => {
    if (dadosTemp.length > 0) {
      for (let index = 1; index < dadosTemp.length; index++) {
        saveToCards(
          dadosTemp[index].id,
          dadosTemp[index].card,
          dadosTemp[index].key,
        );
      }
    }
  }, [uuid]);

  return (
    <ImageBackground
      source={require('../assets/images/bg_screen.png')}
      style={globalStyles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#111" />

      <View style={styles.header}>
        <TouchableOpacity style={styles.icon} onPress={openMenu}>
          <Image
            source={require('../assets/images/navbar.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <View>
          <Text style={styles.headerText}>PRODUTOS</Text>
        </View>
      </View>

      <FlatList
        data={reviews}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('Promo', item)}>
            <Card>
              <View style={globalStyles.cartao}>
                <View>
                  <Image
                    source={item.imagem}
                    style={{
                      width: 70,
                      height: 70,
                      alignSelf: 'center',
                      resizeMode: 'contain',
                      alignSelf: 'center',
                    }}
                  />
                </View>
                <View style={{marginLeft: 5, marginRight: 10}}>
                  <Text style={globalStyles.categoriaText}>
                    {item.categoria}
                  </Text>
                  <View>
                    <Text style={globalStyles.cardText}>{item.nome}</Text>
                    <Text style={globalStyles.categoriaText}>
                      {item.codigo}
                    </Text>
                  </View>

                  <View style={globalStyles.avaliacao}>
                    <Rating
                      type="custom"
                      ratingCount={5}
                      ratingColor="#6AEA7D"
                      selectedColor="#6AEA7D"
                      ratingBackgroundColor="#BDBDBD"
                      tintColor="#fff"
                      startingValue={item.avaliacao}
                      imageSize={10}
                      style={globalStyles.avaliacao}
                    />
                  </View>
                </View>
              </View>
            </Card>
          </TouchableOpacity>
        )}
        extraData={reviews}
      />

      <View>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.footerImg}
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
    position: 'relative',
    bottom: 0,
    left: 0,
  },
});
