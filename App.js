import { createStackNavigator, createAppContainer } from "react-navigation";
import HomePage from './app/components/HomePage/HomePage';
import SizeQuestionPage from './app/components/SizeQuestionPage/SizeQuestionPage';
import LivingQuestionPage from './app/components/LivingQuestionPage/LivingQuestionPage';
import SpaceQuestionPage from './app/components/SpaceQuestionPage/SpaceQuestionPage';

const AppNavigator = createStackNavigator({
  HomePage: {
    screen: HomePage
  },
  SizeQuestionPage: {
    screen: SizeQuestionPage
  },
  LivingQuestionPage: {
    screen: LivingQuestionPage
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

export default createAppContainer(AppNavigator);