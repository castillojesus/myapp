import React, { Component } from 'react';
import {

  StyleSheet,
  Text,
  View
} from 'react-native';
import Content from './Content'
import Login from './Login'
export default class Index extends Component {
    state = {
        username: '',
            password: '',
            isLoggingIn: false,
            message: ''
        }
    render(){
        
        if (this.state.isLoggedIn) 
        return (
            <View style={styles.container}>
                <Content />
            </View>
        )
    else 
      return <Login 
          onLoginPress={() => this.setState({isLoggedIn: true})}
        />;
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor: '#36399a'
    }
})