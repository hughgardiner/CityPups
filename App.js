import { createStackNavigator, createAppContainer } from "react-navigation";
import HomePage from './app/components/HomePage/HomePage';
import SizeQuestionPage from './app/components/SizeQuestionPage/SizeQuestionPage';


const AppNavigator = createStackNavigator({
  HomePage: {
    screen: HomePage
  },
  SizeQuestionPage: {
    screen: SizeQuestionPage
  }
},
{
  headerMode: "none",
  navigationOptions: {
    headerVisible: false,
  }
});

export default createAppContainer(AppNavigator);