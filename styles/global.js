import {StyleSheet} from 'react-native';
import {ceil} from 'react-native-reanimated';
import {Dimensions} from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  tamanho: {
    paddingLeft: 50,
    paddingRight: 50,
    flex: 1,
  },
  tamanho2: {
    paddingLeft: 5,
    paddingRight: 5,
    flex: 1,
  },
  cardContainer: {
    padding: 20,
    flex: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  titleText: {
    fontFamily: 'GOTHAM-BOLD',
    fontSize: 25,
    color: '#201E46',
    textAlign: 'center',
  },
  footerImg: {
    top: 10,
    width: 60,
    height: 40,
    left: 140,
    flex: 1,
  },
  precoText: {
    top: 2,
    bottom: 5,
    fontFamily: 'GOTHAM-BOLD',
    fontSize: 20,
    color: '#201E46',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  normalText: {
    fontFamily: 'GOTHAM MEDIUM',
    fontSize: 15,
    color: '#201E46',
    textAlign: 'center',
  },
  cardText: {
    fontFamily: 'GOTHAM-BOLD',
    fontSize: 14,
    color: '#201E46',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  cardTextCenter: {
    fontFamily: 'GOTHAM-BOLD',
    fontSize: 18,
    color: '#201E46',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  categoriaText: {
    fontFamily: 'GOTHAM MEDIUM',
    fontSize: 8,
    color: '#201E46',
    textAlign: 'left',
  },
  categoriaTextCenter: {
    fontFamily: 'GOTHAM MEDIUM',
    fontSize: 8,
    color: '#201E46',
    textAlign: 'center',
  },
  alertText: {
    fontFamily: 'GOTHAM MEDIUM',
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginTop: 50,
  },
  normalTextJustifB: {
    fontFamily: 'GOTHAM MEDIUM',
    fontSize: 15,
    color: '#201E46',
    textAlign: 'justify',
  },
  normalTextJustif: {
    fontFamily: 'GOTHAM MEDIUM',
    fontSize: 15,
    color: '#fff',
    textAlign: 'justify',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  cartao: {
    flexDirection: 'row',
    flex: 1,
    width: 280,
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
    bottom: 8,
    backgroundColor: 'red',
  },
});
