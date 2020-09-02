import React,{Component} from 'react';
import {Text,View,Button,TextInput} from 'react-native';
//import { StackNavigator, ThemeColors } from 'react-navigation';
//import {createStackNavigator,navigate} from 'react-navigation';
export default class group extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            name:'hello',
        };
    }
    click()
    {
        
        alert("still writing code");
        
    }
    render()
    {
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                {/* <TextInput placeholder="Enter Group name"
                onChangeText={name=>this.setState({name})}
                /> */}
                
                <Button title="Create Group" onPress={this.click} />
                </View>
        );
    }
}