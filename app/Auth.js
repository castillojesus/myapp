import React, {Component} from 'react'
export default class Auth0 extends Component {
const state = {
    username: '',
    password: '',
    isLoggingIn: false,
    message: ''
}
Signup = async () => {
    fetch('https://www.gestionaeduca.cl/comunicaciones/api/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "provider": "username",
        "data": {
        "username": this.state.username,
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
        }
     }).catch((error) => {
         console.error(error);
        });
  }
}