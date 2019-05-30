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

export default class QuestionView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;
    const answerButtons = this.props.answerSlider? this.props.answerSlider : this.props.answerButtons.map(function(answerButton, i) {
      return (<AnswerButton
        key={i}
        buttonKey={answerButton.buttonKey}
        buttonTextStyle={answerButton.buttonTextStyle}
        buttonText={answerButton.buttonText}
        iconSource={answerButton.iconSource}
        iconStyle={answerButton.iconStyle}
        multiSelect={this.props.multiSelect}
        questionKey={this.props.questionKey} />);
    }, this);
    return (
      <Container>
        <Container style={styles.questionTopPanel}>
          <ImageBackground
            source={questionPageBackground}
            style={styles.questionPagePicture}
          />
          <TouchableHighlight
            underlayColor='transparent'
            onPress={() => {
              navigate(this.props.previousPage);
            }}
          >
            <Image style={styles.backArrowButton} source={backArrow} />
          </TouchableHighlight>
          <Text style={styles.questionText}>
            {this.props.questionText}
          </Text>
        </Container>
        <View style={styles.answerPanel}>
          {answerButtons}
          <Container style={styles.continueButtonContainer}>
            <TouchableOpacity style={styles.navigationButton} onPress={() => {
              navigate(this.props.nextPage);
            }}>
              <Text style={styles.navigationButtonText}>
                {this.props.nextPage == 'MatchesPage' ? 'Show Me My Matches' : 'Continue'}
              </Text>
            </TouchableOpacity>
          </Container>
        </View>
      </Container>
    );
  }
}
