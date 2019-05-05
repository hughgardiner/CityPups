import { StyleSheet } from 'react-native';
import { PRIMARY_GREEN } from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  topPanel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00DF5D',
    opacity: 0.7,
  },
  homePagePicture: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: 0.3,
  },
  boneLogoHome: {
    width: '10%',
    height: '10%',
  },
  titleText: {
    color: 'white',
    alignItems: 'center',
    fontFamily: 'DancingScript-Bold',
    fontSize: 50,
  },
  bottomPanel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingText: {
    color: PRIMARY_GREEN,
    fontFamily: 'HelveticaNeue',
    fontSize: 18,
    lineHeight: 25,
  },
  helperDogHome: {
    flex: 1,
    position: 'absolute',
    left: 200,
    top: -57,
  },
  navigationButtonContainer: {
    flex: 1,
    width: '80%',
    paddingVertical: -50,
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
