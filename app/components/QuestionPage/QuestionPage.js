import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
  TouchableHighlight,
} from 'react-native';
import { AnswerButton } from '../AnswerButton/AnswerButton';
import styles from './styles';
import questionPageBackground from '../../../assets/images/questionPageBackground.png';
import backArrow from '../../../assets/images/backArrow.png';
import CityPup from '../CityPup/CityPup';

export default class QuestionPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;
    const answerButtons = this.props.answerButtons.map((answerButton, i) => {
      return (<AnswerButton
        key={i}
        buttonTextStyle={answerButton.buttonTextStyle}
        buttonText={answerButton.buttonText}
        iconSource={answerButton.iconSource}
        iconStyle={answerButton.iconStyle}
        multiSelect={this.props.multiSelect} />);
    });
    return (
      <View style={styles.container}>
        <View style={styles.questionTopPanel}>
          <ImageBackground
            source={questionPageBackground}
            style={styles.questionPagePicture}
          />
          <TouchableHighlight
            onPress={() => {
              navigate(this.props.previousPage);
            }}
          >
            <Image style={styles.backArrowButton} source={backArrow} />
          </TouchableHighlight>
          <Text style={styles.questionText}>
            {this.props.questionText}
          </Text>
        </View>
        <View style={styles.bottomPanel}>
          <View style={styles.cityPupContainer}>
            <CityPup />
          </View>
        </View>
        <View style={styles.answerPanel}>
          {answerButtons}
          <View style={styles.continueButtonContainer}>
            <TouchableOpacity style={styles.navigationButton} onPress={() => {
              navigate(this.props.nextPage);
            }}>
              <Text style={styles.navigationButtonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
