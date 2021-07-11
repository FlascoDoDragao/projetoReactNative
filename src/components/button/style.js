import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    padding: 5

  },
  button: {
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
  text: {
    color: '#c7c4cf',
    fontSize: 14,
    fontWeight: '700',
  },
});

export default Styles;
