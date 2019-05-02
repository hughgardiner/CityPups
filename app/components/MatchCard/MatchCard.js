import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import styles from './styles';
import koda from '../../../assets/images/koda.jpeg';

export const MatchCard = props => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={koda}  />
      </View>
      <View style={styles.footer}>
        <View style={styles.textStyle}>
          <Text styles={styles.dogName}>Koda</Text>
          <Text> of type {props.breed}</Text>
        </View>
        <View style={styles.profileButton}>
          <TouchableOpacity
            style={styles.navigationButton}
            onPress={() => {
              navigate('SizeQuestionPage', { navigation: this.props.navigation });
            }}
          >
            <Text style={styles.navigationButtonText}>View Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}