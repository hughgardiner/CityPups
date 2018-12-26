import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomePage from './app/components/HomePage/HomePage';
import SizeQuestionPage from './app/components/SizeQuestionPage/SizeQuestionPage';
import HousingQuestionPage from './app/components/HousingQuestionPage/HousingQuestionPage';
import SpaceQuestionPage from './app/components/SpaceQuestionPage/SpaceQuestionPage';
import SuveryAnswers from './app/SurveyAnswers';
import { Provider }  from 'mobx-react';


const AppNavigator = createStackNavigator({
  HomePage: {
    screen: HomePage
  },
  SizeQuestionPage: {
    screen: SizeQuestionPage
  },
  HousingQuestionPage: {
    screen: HousingQuestionPage
  },
  SpaceQuestionPage: {
    screen: SpaceQuestionPage
  }
},
{
  headerMode: "none",
  navigationOptions: {
    headerVisible: false,
  }
});

// export default createAppContainer(AppNavigator);
const AppContainer = createAppContainer(AppNavigator);
const store = new SuveryAnswers();
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    )
  }
}
    