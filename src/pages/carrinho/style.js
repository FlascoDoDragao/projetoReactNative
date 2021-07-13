import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowcontainer: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 20,
    marginRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 30,
    textAlign: 'center',
  },
  text: {
    padding: 10,
    fontSize: 20,
    color: '#101010',
  },
  delete: {
    alignSelf: 'flex-end',
    padding: 8,
    fontSize: 15,
  },
  total: {
    fontSize: 20,
  },
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
  },
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
  button: {
    flexDirection: 'row-reverse',
  },
  containerBotao: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 5,
  },
  botao: {
    paddingLeft: 5,
    paddingRight: 5,
    alignItems: 'center',
    backgroundColor: '#392273',
    padding: 10,
    borderRadius: 15,
    elevation: 10,
    width: 100,
    height: 50,
  },
  textBotao: {
    color: '#c7c4cf',
    fontSize: 14,
    fontWeight: '700',
  },
  lixeira: {
    alignContent: 'flex-end',
  },
});

export default styles;
