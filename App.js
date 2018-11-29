import { createStackNavigator, createAppContainer } from "react-navigation";
import HomePage from './app/components/HomePage/HomePage';
import SizeQuestionPage from './app/components/SizeQuestionPage/SizeQuestionPage';
import LivingQuestionPage from './app/components/LivingQuestionPage/LivingQuestionPage';


const AppNavigator = createStackNavigator({
  HomePage: {
    screen: HomePage
  },
  SizeQuestionPage: {
    screen: SizeQuestionPage
  },
  LivingQuestionPage: {
    screen: LivingQuestionPage
  }
},
{
  headerMode: "none",
  navigationOptions: {
    headerVisible: false,
  }
});

export default createAppContainer(AppNavigator);