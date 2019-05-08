import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import styles from './styles';
import rightArrow from '../../../assets/images/rightArrow.png'

export const MatchCard = props => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: props.data.photo}}  />
      </View>
      <View style={styles.cardFooter}>
        <View style={styles.cardFooterText}>
          <Text style={styles.dogName}>{props.data.name}</Text>
          <Text style={styles.ageAndBreed}>{props.data.breed}</Text>
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