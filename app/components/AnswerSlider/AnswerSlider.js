import React from 'react';
import {
  View,
  Text,
  Slider
} from 'react-native';
import styles from './styles';
import { LinearGradient } from 'expo';
import sliderSquare from '../../../assets/images/sliderSquare.png';

export default class AnswerSlider extends React.Component {
  render() {
    return (
      <Container style={styles.sliderContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.redText}>{'<'} 40 Hours</Text>
          <Text style={styles.greenText}>Not at all!</Text>
        </View>
        <LinearGradient
          colors={['#FF4F4F', '#FF804F', '#FDFFA2', '#5CC8AB']}
          location={[0, 0.49, 0.68, 1]}
          start={[0,0]}
          end={[1,0]}
          style={styles.gradient}>
          <Slider
            minimumValue={0}
            maximumValue={40}
            minimumTrackTintColor="transparent"
            maximumTrackTintColor="transparent"
            step={1}
            value={4}
            // onValueChange={value => this.onValueChange(value)}
            style={styles.slider}
            thumbTintColor="#1EB1FC"
            thumbImage={sliderSquare}
          />
        </LinearGradient>
      </Container>
    )
  }
}