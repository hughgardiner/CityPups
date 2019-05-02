import React from 'react';
import styles from './styles';
import QuestionPage from '../QuestionPage/QuestionPage';
import noPets from '../../../assets/images/noPetsIcon.png';
import otherDogs from '../../../assets/images/otherDogsIcon.png';
import cat from '../../../assets/images/catIcon.png';
import bird from '../../../assets/images/birdIcon.png';
import * as Roommates from '../../constants/roommates';

const roommatePageButtons = [
  {
    buttonKey: Roommates.NONE,
    buttonText: 'No other pets',
    buttonTextStyle: styles.answerButtonText,
    iconSource: noPets,
    iconStyle: styles.roommateIconStyle,
  },
  {
    buttonKey: Roommates.OTHER_DOGS,
    buttonText: 'Other dogs',
    buttonTextStyle: styles.answerButtonText,
    iconSource: otherDogs,
    iconStyle: styles.roommateIconStyle,
  },
  {
    buttonKey: Roommates.CATS,
    buttonText: 'Cats',
    buttonTextStyle: styles.answerButtonText,
    iconSource: cat,
    iconStyle: styles.roommateIconStyle,
  },
  {
    buttonKey: Roommates.OTHER_PETS,
    buttonText: 'Other small animals',
    buttonTextStyle: styles.answerButtonText,
    iconSource: bird,
    iconStyle: styles.roommateIconStyle,
  }
]

export default class RoommateQuestionPage extends React.Component {
  render() {
    const roommatePageProps = {
      questionText: "Will your dog have\nroommates? (other\npets)",
      navigation: this.props.navigation,
      answerButtons: roommatePageButtons,
      previousPage: 'SpaceQuestionPage',
      nextPage: 'MatchesPage',
      multiSelect: true,
      questionKey: Roommates.ROOMMATES
    }
    return <QuestionPage {...roommatePageProps} />
  }
}