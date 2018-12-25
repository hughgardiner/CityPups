import React from 'react';
import styles from './styles';
import warningIcon from '../../../assets/images/warningIcon.png';
import parkIcon from '../../../assets/images/parkIcon.png';
import plantIcon from '../../../assets/images/plantIcon.png';
import fenceIcon from '../../../assets/images/fenceIcon.png';
import QuestionPage from '../QuestionPage/QuestionPage';

const spacePageButtons = [
    {
      buttonText: 'No outdoor space',
      iconStyle: [styles.spaceIconStyle],
      iconSource: warningIcon
    },
    {
      buttonText: 'Dog park nearby',
      iconStyle: [styles.spaceIconStyle],
      iconSource: parkIcon
    },
    {
      buttonText: 'Small yard',
      iconStyle: [styles.spaceIconStyle],
      iconSource: plantIcon
    },
    {
      buttonText: 'Good sized yard',
      iconStyle: [styles.spaceIconStyle],
      iconSource: fenceIcon
    }
]

export default class SpaceQuestionPage extends React.Component {
  render() {
    const spacePageProps = {
      questionText: "How much space\nwill your dog have\nto play?",
      navigation: this.props.navigation,
      answerButtons: spacePageButtons,
      previousPage: 'LivingQuestionPage',
      nextPage: 'RoommateQuestionPage',
      multiSelect: true,
      answerKey: 'spaceAnswer'
    }
    return (
      <QuestionPage {...spacePageProps} />
    );
  }
}