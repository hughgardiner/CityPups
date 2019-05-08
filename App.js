import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomePage from './app/components/HomePage/HomePage';
import SizeQuestionPage from './app/components/SizeQuestionPage/SizeQuestionPage';
import HousingQuestionPage from './app/components/HousingQuestionPage/HousingQuestionPage';
import SpaceQuestionPage from './app/components/SpaceQuestionPage/SpaceQuestionPage';
import RoommateQuestionPage from './app/components/RoommateQuestionPage/RoommateQuestionPage';
import MatchesPage from './app/components/MatchesPage/MatchesPage';
import { Font, AppLoading } from 'expo';
import Store from './app/Store';
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
  },
  RoommateQuestionPage: {
    screen: RoommateQuestionPage
  },
  MatchesPage: {
    screen: MatchesPage
  }
},
{
  headerMode: "none",
  navigationOptions: {
    headerVisible: false,
  }
});

const AppContainer = createAppContainer(AppNavigator);
const store = new Store();
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fontLoaded: false
    }
  }
  async componentDidMount() {
    await Font.loadAsync({
      "DancingScript-Bold": require("./assets/fonts/DancingScript-Bold.ttf"),
    })
    this.setState({ fontLoaded: true })
    store.setAccessToken();
  }
  render() {
    if (!this.state.fontLoaded) {
      return <AppLoading />
    }
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    )
  }
}
    