import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

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

const navigationPages = createStackNavigator({
  Home: { screen: FirstScreen },
  MainPage: { screen: SecondScreen }
},
  {
    initialRouteName: 'Home'
  });

const App = createAppContainer(navigationPages);

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
