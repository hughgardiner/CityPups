import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import styles from './styles';
import rightArrow from '../../../assets/images/rightArrow.png'
import koda from '../../../assets/images/koda.jpeg';

export const MatchCard = props => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={koda}  />
      </View>
      <View style={styles.cardFooter}>
        <View style={styles.cardFooterText}>
          <Text style={styles.dogName}>Koda</Text>
          <Text style={styles.ageAndBreed}>
          12 month old Golden{props.breed}
          </Text>
        </View>
        <View style={styles.profileButtonContainer}>
          <TouchableOpacity
            style={styles.profileButton}
            onPress={() => {
              navigate('SizeQuestionPage', { navigation: this.props.navigation });
            }}
          >
            <Text style={styles.profileButtonText}>View Profile</Text>
            <Image source={rightArrow} style={styles.rightArrow}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}