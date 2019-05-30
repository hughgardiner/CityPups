import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';
import styles from './styles';
import answerCheck from '../../../assets/images/answerCheck.png';
import { observer, inject } from 'mobx-react';
import Container from '../Container';

const selectedState = {
  selected: true,
  buttonColor: styles.buttonSelectedColor,
  textColor: styles.textSelectedColor,
  iconColor: styles.iconSelectedColor,
};

const unselectedState = {
  selected: false,
  buttonColor: styles.buttonUnselectedColor,
  textColor: styles.textUnselectedColor,
  iconColor: styles.iconUnselectedColor,
};

@inject('store')
@observer
export class AnswerButton extends React.Component {
  constructor(props) {
    super(props);
    this.buttonPressed = this.buttonPressed.bind(this);
  }

  buttonPressed = () => {
    this.props.store.toggleAnswer(this.props.questionKey, this.props.buttonKey, this.props.multiSelect);
  };

  render() {
    const buttonSelected = this.props.store.questions[this.props.questionKey][this.props.buttonKey]
    const buttonState = buttonSelected ? selectedState : unselectedState;

    const buttonCheck = buttonSelected && this.props.multiSelect ? (
      <Image source={answerCheck} style={styles.answerCheck} />
    ) : null;

    return (
      <Container style={styles.answerButtonContainer}>
        <TouchableOpacity
          style={[styles.answerButton, buttonState.buttonColor]}
          onPress={this.buttonPressed}
        >
          <Image
            source={this.props.iconSource}
            style={[this.props.iconStyle, buttonState.iconColor]}
          />
          <Text style={[styles.answerButtonText, buttonState.textColor, this.props.buttonTextStyle]}>
            {this.props.buttonText}
          </Text>
          {buttonCheck}
        </TouchableOpacity>
      </Container>
    );
  }
}
