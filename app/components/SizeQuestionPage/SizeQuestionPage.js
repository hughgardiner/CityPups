import React from 'react';
import {
  View
} from 'react-native';
import styles from './styles';
import tinyDogIcon from '../../../assets/images/tinyDogIcon.png';
import smallDogIcon from '../../../assets/images/smallDogIcon.png';
import mediumDogIcon from '../../../assets/images/mediumDogIcon.png';
import largeDogIcon from '../../../assets/images/largeDogIcon.png';
import QuestionPage from '../QuestionPage/QuestionPage';
import * as DogSizes from '../../constants/dogSizes';
import CityPup from '../CityPup/CityPup';

const sizePageButtons = [
  {
    buttonKey: DogSizes.TINY_DOG,
    buttonText: 'Tiny',
    iconSource: tinyDogIcon,
    iconStyle: [styles.dogIconStyle, styles.tinyDogIconSize]
  },
  {
    buttonKey: DogSizes.SMALL_DOG,
    buttonText: 'Small',
    iconSource: smallDogIcon,
    iconStyle: [styles.dogIconStyle, styles.smallDogIconSize]
  },
  {
    buttonKey: DogSizes.MEDIUM_DOG,
    buttonText: 'Medium',
    iconSource: mediumDogIcon,
    iconStyle: [styles.dogIconStyle, styles.mediumDogIconSize]
  },
  {
    buttonKey: DogSizes.LARGE_DOG,
    buttonText: 'Large',
    iconSource: largeDogIcon,
    iconStyle: [styles.dogIconStyle, styles.largeDogIconSize]
  }
]

export default class SizeQuestionPage extends React.Component {
  render() {
    const sizePageProps = {
      questionText: "What size dog are \n you looking for?",
      navigation: this.props.navigation,
      answerButtons: sizePageButtons,
      previousPage: 'HomePage',
      nextPage: 'HousingQuestionPage',
      multiSelect: true,
      questionKey: DogSizes.SIZE
    }
    return (
      <QuestionPage {...sizePageProps} />
    );
  }
}
