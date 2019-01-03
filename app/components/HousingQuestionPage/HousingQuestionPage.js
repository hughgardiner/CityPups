import React from 'react';
import styles from './styles';
import QuestionPage from '../QuestionPage/QuestionPage';
import smallApartmentIcon from '../../../assets/images/smallApartmentIcon.png';
import largeApartmentIcon from '../../../assets/images/largeApartmentIcon.png';
import houseIcon from '../../../assets/images/houseIcon.png';
import * as Housing from '../../constants/housing';

const housingPageButtons = [
  {
    buttonKey: Housing.SMALL,
    buttonText: 'I live in a small apartment',
    buttonTextStyle: styles.answerButtonText,
    iconSource: smallApartmentIcon,
    iconStyle: [styles.apartmentIconStyle, styles.smallApartmentStyle],
  },
  {
    buttonKey: Housing.LARGE,
    buttonText: 'I live in a large apartment or loft',
    buttonTextStyle: styles.answerButtonText,
    iconSource: largeApartmentIcon,
    iconStyle: styles.apartmentIconStyle,
  },
  {
    buttonKey: Housing.HOME,
    buttonText: 'I live in a single family home',
    buttonTextStyle: styles.answerButtonText,
    iconSource: houseIcon,
    iconStyle: styles.apartmentIconStyle,
  },
]

export default class HousingQuestionPage extends React.Component {
  render() {
    const housingPageProps = {
      questionText: "Where will your \n new dog live?",
      navigation: this.props.navigation,
      answerButtons: housingPageButtons,
      previousPage: 'SizeQuestionPage',
      nextPage: 'SpaceQuestionPage',
      questionKey: Housing.HOUSING
    }
    return <QuestionPage {...housingPageProps} />
  }
}