import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  ImageSourcePropType,
  ViewStyle,
  RegisteredStyle,
  TextStyle,
} from 'react-native';
import styles from './styles';
import answerCheck from '../../../assets/images/answerCheck.png';

// export interface AnswerProps {
//   iconSource: ImageSourcePropType;
//   iconStyle: any;
//   buttonText: string;
//   buttonTextStyle?: RegisteredStyle<TextStyle>;
//   multiSelect?: boolean;
// }

// interface AnswerState {
//   selected: boolean;
//   buttonColor: RegisteredStyle<ViewStyle>;
//   textColor: RegisteredStyle<ViewStyle>;
//   iconColor: RegisteredStyle<ViewStyle>;
// }

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

export class AnswerButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = unselectedState;
  }

  buttonPressed = () => {
    this.state.selected
      ? this.setState(unselectedState)
      : this.setState(selectedState);
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
