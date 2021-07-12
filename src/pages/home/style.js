import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'baseline',
  },
  containerBotao: {
    paddingTop: 35,
  },
  busca: {
    backgroundColor: '#392273',
    elevation: 0,
    width: '100%',
  },
  btnAddCart: {
    backgroundColor: '#fff',
  },
  containerAct: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 30,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  listItem: {
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {},
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  productInfo: {
    marginLeft: 10,
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
});

export default Styles;
