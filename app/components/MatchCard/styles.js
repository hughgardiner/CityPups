import { StyleSheet } from 'react-native';
import { PRIMARY_GREEN } from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1.1,
    borderRadius: 30,
    overflow: 'hidden'
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    width: 350,
    height: 182
  },
  textStyle: {
    flex: 1
  },
  footer: {
    flex: 1,
    flexDirection: 'row'
  },
  dogName: {

  },
  navigationButton: {
    backgroundColor: PRIMARY_GREEN,
    alignItems: 'center',
    paddingVertical: 15,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: 'gray',
    shadowOpacity: 1.0,
  },
  navigationButtonText: {
    color: 'white',
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 16,
  },
});