import { StyleSheet } from 'react-native';
import { PRIMARY_GREEN } from '../../styles';

export default StyleSheet.create({
  answerButtonContainer: {
    flex: 1,
    width: '80%',
    justifyContent: 'space-between',
  },
  answerButton: {
    backgroundColor: 'white',
    alignItems: 'flex-start',
    paddingVertical: 11,
    borderColor: '#00B561',
    borderWidth: 1.1,
    borderRadius: 10,
    flexDirection: 'row',
  },
  answerButtonText: {
    left: 60,
  },
  textSelectedColor: {
    color: 'white',
  },
  textUnselectedColor: {
    color: PRIMARY_GREEN,
  },
  answerCheck: {
    position: 'absolute',
    width: 20,
    height: 20,
    left: 220,
    top: 9,
    resizeMode: 'contain',
    tintColor: 'white',
  },
  buttonSelectedColor: {
    backgroundColor: PRIMARY_GREEN,
  },
  buttonUnselectedColor: {
    backgroundColor: 'white',
  },
  iconSelectedColor: {
    tintColor: 'white',
  },
  iconUnselectedColor: {
    tintColor: PRIMARY_GREEN,
  },
});
