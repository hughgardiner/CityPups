import React from 'react';
import styles from './styles';
import tinyDogIcon from '../../../assets/images/tinyDogIcon.png';
import smallDogIcon from '../../../assets/images/smallDogIcon.png';
import mediumDogIcon from '../../../assets/images/mediumDogIcon.png';
import largeDogIcon from '../../../assets/images/largeDogIcon.png';
import QuestionPage from '../QuestionPage/QuestionPage';

const sizePageButtons = [
  {
    buttonText: 'Tiny',
    iconSource: tinyDogIcon,
    iconStyle: [styles.dogIconStyle, styles.tinyDogIconSize]
  },
  {
    buttonText: 'Small',
    iconSource: smallDogIcon,
    iconStyle: [styles.dogIconStyle, styles.smallDogIconSize]
  },
  {
    buttonText: 'Medium',
    iconSource: mediumDogIcon,
    iconStyle: [styles.dogIconStyle, styles.mediumDogIconSize]
  },
  {
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
      answerKey: 'sizeAnswers'
    }
    console.log('Size Question Page Props:')
    console.log(this.props)
    return (
      <QuestionPage {...sizePageProps} />
    );
  }
}
