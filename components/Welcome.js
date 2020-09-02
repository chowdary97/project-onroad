import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View,StatusBar,Button} from 'react-native';
import firebase from 'firebase';



export default class App extends Component {
    constructor(props)
    {
        super(props);
    this.state={
        name:firebase.auth().currentUser.displayName,
        
    }}
componentDidMount()
{
    
}
    



  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#4F6D7A"
        />
        <Text style={styles.welcome}>
          Welcome
        </Text>
        <Text style={styles.welcome}>
            {this.state.name}
            </Text>
            
        <Button title="Locate" onPress={()=>this.props.navigation.navigate("Dashboard")}/>
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4F6D7A',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#F5FCFF',
    marginBottom: 5,
  },
});