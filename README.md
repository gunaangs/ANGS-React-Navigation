# angsnavigation

1. Create a new Expo project using below command

  $ expo init angsnavigation

2. Need to install react navigation dependency using the below command

  $ npm install --save react-navigation

3. Modify the App.js file like below

  1. Import the react navigation into App.js file

    import { createStackNavigator, createAppContainer } from 'react-navigation';

  2. Create two different class 

    class FirstScreen extends React.Component {

      static navigationOptions = {
        title:'Home',
      };
      render() {
        return (
          <View style={styles.container}>
            <Button onPress={() => this.props.navigation.navigate('MainPage')} title='Go to Main Screen' />
          </View>
        );
      }
    }


    class SecondScreen extends React.Component {

      static navigationOptions = {
        title:'Main',
      };

      render() {
        return (
          <View style={styles.container}>
            <Button onPress={() => this.props.navigation.navigate('Home')} title='Go Back to Home Screen' />
          </View>
        );
      }
    }

  3. Create Stack Navigator using the createStackNavigator() method

    const navigationPages = createStackNavigator({
      Home: { screen: FirstScreen },
      MainPage: { screen: SecondScreen }
    },
    {
      initialRouteName: 'Home'
    });

  4. Create App Container using the creaeteAppNavigator() method

    const App = createAppContainer(navigationPages);

  5. Export the created app container 
  
    export default App;

4. Now run the expo start command to preview the application in your mobile device or simulator

  $ expo start

5. Run with android deveice or IOS device.
