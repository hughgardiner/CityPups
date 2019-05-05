import { StyleSheet } from 'react-native';
import { PRIMARY_GREEN } from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 8,
    overflow: 'hidden',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    width: 350,
    height: 182
  },
  cardFooter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 20
  },
  cardFooterText: {
    flex: 1
  },
  dogName: {
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 18,
    color: '#636363'
  },
  ageAndBreed: {
    fontFamily: 'HelveticaNeue-Light',
    fontSize: 12,
    color: '#636363'
  },
  profileButtonContainer: {
    flex: 1,
    maxHeight: 40
  },
  profileButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: PRIMARY_GREEN
  },
  profileButtonText: {
    color: PRIMARY_GREEN,
    fontFamily: 'HelveticaNeue-Light',
    fontSize: 12
  },
  rightArrow: {
    tintColor: PRIMARY_GREEN,
    width: 16,
    height: 16,
  }
});