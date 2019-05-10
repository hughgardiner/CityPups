import React from 'react';
import QuestionPage from '../QuestionPage/QuestionPage';
import AnswerSlider from '../AnswerSlider/AnswerSlider';

export default class AloneTimeQuestionPage extends React.Component {
  render() {
    const aloneTimeProps = {
      questionText: "How long will\nyour dog be\nalone each week?",
      navigation: this.props.navigation,
      answerSlider: <AnswerSlider/>,
      previousPage: 'RoommateQuestionPage',
      nextPage: 'MatchesPage',
      // questionKey: AloneTime.ALONE_TIME
    }
    return <QuestionPage {...aloneTimeProps} />
  }
}