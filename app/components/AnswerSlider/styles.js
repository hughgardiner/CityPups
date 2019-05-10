import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  sliderContainer: {
    flex: 1,
    flexBasis:100
  },
  slider: {
    width: 290
  },
  gradient: {
    borderRadius: 11
  },
  textContainer: {
    flex: 0,
    flexBasis: 50,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  redText: {
    flex: 1,
    color: '#FF6E49',
    fontSize: 16,
    fontFamily: 'HelveticaNeue-Bold'
  },
  greenText: {
    fontSize: 16,
    fontFamily: 'HelveticaNeue-Bold',
    color: '#5CC8AB'
  }
});