import { StyleSheet } from 'react-native';
import { PRIMARY_GREEN } from '../../styles';

export default StyleSheet.create({
  dogIconStyle: {
    position: 'absolute',
    tintColor: PRIMARY_GREEN,
    resizeMode: 'contain',
  },
  largeDogIconSize: {
    width: 30,
    height: 30,
    left: 10,
    top: 3,
  }, 
  mediumDogIconSize: {
    width: 25,
    height: 25,
    left: 15,
    top: 6,
  },
  smallDogIconSize: {
    width: 40,
    height: 40,
    left: 6,
    top: -1,
  },
  tinyDogIconSize: {
    width: 35,
    height: 35,
    left: 7,
    top: 1,
  },
  bottomPanel: {
    // justifyContent: 'flex-end',
  },
  cityPupContainer: {
    // top: 50,
    // left: 20
  }
});
