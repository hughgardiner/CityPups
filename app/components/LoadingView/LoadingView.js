import React from 'react';
import {
  Image,
  Text
} from 'react-native';
import boneLogo from '../../../assets/images/boneLogo.png';
import Container from '../Container';
import styles from './styles';

export default class LoadingView extends React.Component {
  render() {
    return (
      <Container style={styles.loadingStyle}>
        <Image source={boneLogo} />
        <Text style={styles.loadingText}>Match Making...</Text>
      </Container>
    )
  }
}