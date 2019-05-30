import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import styles from './styles';
import rightArrow from '../../../assets/images/rightArrow.png'
import helperDog from '../../../assets/images/helperDog.png';

export const MatchCard = props => {
  let source = props.data.photo ? {uri: props.data.photo.full} : helperDog;
  return (
    <Container style={styles.container}>
      <Container style={styles.imageContainer}>
        <Image style={styles.image} source={source}  />
      </Container>
      <Container style={styles.cardFooter}>
        <Container>
          <Text style={styles.dogName}>{props.data.name}</Text>
          <Text style={styles.ageAndBreed}>{props.data.breed}</Text>
        </Container>
        <Container style={styles.profileButtonContainer}>
          <TouchableOpacity
            style={styles.profileButton}
            onPress={() => {
              navigate('SizeQuestionPage', { navigation: this.props.navigation });
            }}
          >
            <Text style={styles.profileButtonText}>View Profile</Text>
            <Image source={rightArrow} style={styles.rightArrow}/>
          </TouchableOpacity>
        </Container>
      </Container>
    </Container>
  );
}