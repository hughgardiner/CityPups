import { StyleSheet } from 'react-native';
import { PRIMARY_GREEN } from '../../styles';

export default StyleSheet.create({
  dogIconStyle: {
    position: 'absolute',
    tintColor: PRIMARY_GREEN,
    width: 30,
    height: 30,
    left: 10,
    top: 5,
    resizeMode: 'contain',
  },
  mediumDogIconSize: {
    width: 25,
    height: 25,
    left: 15,
    top: 7,
  },
  smallDogIconSize: {
    width: 40,
    height: 40,
    left: 6,
    top: 1,
  },
  tinyDogIconSize: {
    width: 35,
    height: 35,
    left: 7,
    top: 3,
  },
});
