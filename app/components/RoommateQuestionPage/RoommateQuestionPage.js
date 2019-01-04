import React from 'react';
import styles from './styles';
import QuestionPage from '../QuestionPage/QuestionPage';
import noPets from '../../../assets/images/noPets.png';
import otherDogs from '../../../assets/images/otherDogs.png';
import cat from '../../../assets/images/cat.png';
import bird from '../../../assets/images/bird.png';
import * as Roommates from '../../constants/roommates';

const roomatePageButtons = [
  {
    buttonKey: Roommates.NONE,
    buttonText: 'I live in a small apartment',
    buttonTextStyle: styles.answerButtonText,
    iconSource: smallApartmentIcon,
    iconStyle: [styles.apartmentIconStyle, styles.smallApartmentStyle],
  },
  {
    buttonKey: Roommates.OTHER_DOGS,
    buttonText: 'I live in a large apartment or loft',
    buttonTextStyle: styles.answerButtonText,
    iconSource: largeApartmentIcon,
    iconStyle: styles.apartmentIconStyle,
  },
  {
    buttonKey: Roommates.CAT,
    buttonText: 'I live in a single family home',
    buttonTextStyle: styles.answerButtonText,
    iconSource: houseIcon,
    iconStyle: styles.apartmentIconStyle,
  },
]