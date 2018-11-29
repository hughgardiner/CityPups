import { StyleSheet } from 'react-native';
import { PRIMARY_GREEN } from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  questionTopPanel: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: PRIMARY_GREEN,
    opacity: 1,
  },
  backArrowButton: {
    top: '90%',
    left: '-40%',
    alignSelf: 'flex-start',
  },
  questionText: {
    flex: 1,
    color: 'white',
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 32,
    top: '15%',
    left: '-5%',
    right: '10%',
  },
  answerPanel: {
    flex: 1,
    position: 'absolute',
    borderColor: '#000000',
    backgroundColor: 'white',
    top: '30%',
    left: '6%',
    right: '6%',
    bottom: '20%',
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: '13%',
  },
  questionPagePicture: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: 0.03,
  },
  continueButtonContainer: {
    flex: 1,
    width: '80%',
    justifyContent: 'flex-end',
  },
  answerPageNavigationButtonContainer: {
    flex: 1,
    width: '80%',
    paddingVertical: -50,
    top: 250,
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
  bottomPanel: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  cityPupContainer: {
    top: 50,
    left: 20
  }
});
