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
import * as StateService from '../../utils/StateService';

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
    this.state = unselectedState;
    this.buttonPressed = this.buttonPressed.bind(this);
  }

  buttonPressed = () => {
    let answerKey = this.props.answerKey;
    if (this.state.selected) {
      this.setState(unselectedState);
      StateService.answerUnselected(this.props.store.answers, answerKey, this.props.buttonText);
    }
    else {
      this.setState(selectedState);
      StateService.answerSelected(this.props.store.answers, answerKey, this.props.buttonText);
    }
    console.log(this.props.store);
  };

  render() {
    const buttonCheck = this.state.selected && this.props.multiSelect ? (
      <Image source={answerCheck} style={styles.answerCheck} />
    ) : null;

    return (
      <View style={styles.answerButtonContainer}>
        <TouchableOpacity
          style={[styles.answerButton, this.state.buttonColor]}
          onPress={this.buttonPressed}
        >
          <Image
            source={this.props.iconSource}
            style={[this.props.iconStyle, this.state.iconColor]}
          />
          <Text style={[styles.answerButtonText, this.state.textColor, this.props.buttonTextStyle]}>
            {this.props.buttonText}
          </Text>
          {buttonCheck}
        </TouchableOpacity>
      </View>
    );
  }
}
