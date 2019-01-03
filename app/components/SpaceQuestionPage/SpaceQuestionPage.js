import React from 'react';
import styles from './styles';
import warningIcon from '../../../assets/images/warningIcon.png';
import parkIcon from '../../../assets/images/parkIcon.png';
import plantIcon from '../../../assets/images/plantIcon.png';
import fenceIcon from '../../../assets/images/fenceIcon.png';
import QuestionPage from '../QuestionPage/QuestionPage';
import * as Space from '../../constants/space';

const spacePageButtons = [
    {
      buttonKey: Space.NONE,
      buttonText: 'No outdoor space',
      iconStyle: [styles.spaceIconStyle],
      iconSource: warningIcon
    },
    {
      buttonKey: Space.DOG_PARK,
      buttonText: 'Dog park nearby',
      iconStyle: [styles.spaceIconStyle],
      iconSource: parkIcon
    },
    {
      buttonKey: Space.SMALL_YARD,
      buttonText: 'Small yard',
      iconStyle: [styles.spaceIconStyle],
      iconSource: plantIcon
    },
    {
      buttonKey: Space.BIG_YARD,
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
      previousPage: 'HousingQuestionPage',
      nextPage: 'RoommateQuestionPage',
      multiSelect: true,
      questionKey: Space.SPACE
    }
    return (
      <QuestionPage {...spacePageProps} />
    );
  }
}