import { StyleSheet } from 'react-native';
import { PRIMARY_GREEN } from '../../styles';

export default StyleSheet.create({
  apartmentIconStyle: {
    position: 'absolute',
    tintColor: PRIMARY_GREEN,
    width: 30,
    height: 30,
    left: 10,
    top: 5,
    resizeMode: 'contain',
  },
  smallApartmentStyle: {
    width: 45,
    height: 45,
    left: 2,
    top: -2,
  },
  answerButtonText: {
    left: 48,
  },
})