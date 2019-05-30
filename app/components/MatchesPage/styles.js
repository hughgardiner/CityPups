import { StyleSheet } from 'react-native';
import { PRIMARY_GREEN } from '../../styles';

export default StyleSheet.create({
  header: {
    flexBasis: 50,
    justifyContent: 'center',
    backgroundColor: '#74D0A5'
  },
  headerText: {
    color: 'white',
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 28,
    marginLeft: 20
  },
  hamburgerButton: {
    tintColor: 'white',
    marginRight: 10
  },
  listView: {
    padding: 10,
    marginBottom: 10,
  },
  backArrowButton: {
    marginLeft: 10,
    alignSelf: 'flex-start',
    width: 30,
    height: 30,
    resizeMode: 'contain'
  },
});