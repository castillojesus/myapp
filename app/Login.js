import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    FlatList, ActivityIndicator,Alert
} from 'react-native';

export default class Login extends Component {
    Signup = async () => {
        fetch('https://www.gestionaeduca.cl/comunicaciones/api/login', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "provider": "username",
            "data": {
            "rut": this.state.username,
            "password": this.state.password
            }
            })
        }).then((response) => response.json())
        .then((res) => {
          if(typeof(res.message) != "undefined"){
          Alert.alert("Error signing up", "Error: "+ res.message);
    }
          else{
          this.setState({ auth_token: res.auth_token,isLoggingIn:true });
          Alert.alert("Success", "You have succesfully signed up");
          if (proceed) this.props.onLoginPress();
          }
        }).catch((error) => {
        console.error(error);
        });
      }
      Login = async () => {
        fetch('https://www.gestionaeduca.cl/comunicaciones/api/login', {
              method: 'post',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                "provider": "username",
                "data": {
                    "rut": this.state.username,
                    "password": this.state.password
                },"rut": this.state.username,
                "password": this.state.password
              })
            }).then((response) => response.json())
            .then((res) => {
          if(res.result != "success"){
           Alert.alert("Error", "Error: "+ res.message);
          }
          else{
            this.setState({ auth_token: res.token });
            Alert.alert("Welcome", " You have succesfully logged in");
            this.setState({isLoggedIn: true});
            this.props.onLoginPress();
            }
         }).catch((error) => {
             console.error(error);
            });
      }
    render() {
        return (
            <ScrollView style={{padding: 20}}>
                <Text 
                    style={{fontSize: 27}}>
                    Login
                </Text>
                <TextInput placeholder='RUT' onChangeText={ TextInputValue =>
           this.setState({username : TextInputValue }) } />
                
                <TextInput placeholder='Password' onChangeText={ TextInputValue =>
           this.setState({password: TextInputValue }) } />
                <View style={{margin:7}} />
                <Button 
                        //onPress={this.props.onLoginPress}
                        onPress={this.Login.bind(this)}
                        
                        title="Submit"
                    />
                </ScrollView>
            )
    }
}