import React, {Component} from 'react'
import{
    Text,
    View,
    StyleSheet,
    Button,
    Image,
    TouchableHighlight,
    Alert,
    ActivityIndicator,
    AppRegistry

} from 'react-native'
import { Icon } from 'react-native-elements'
import { StackNavigator } from 'react-navigation';
import {Column as Col, Row} from 'react-native-flexbox-grid';
import Questions from './Questions';
import Friends from './Friends';
import VSettings from './Settings';
class CFriends extends Component
{
 render()
 {
    return(
       <View >
           <Friends />
       </View>
    );
 }
}
class CPrincipal extends Component
{
    static navigationOptions = {
        header: null,
        };
        handlePress = async () => {
            fetch('https://data.advance88.hasura-app.io/v1/query', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "type": "select",
              "args": {
                  "table": "author",
                  "columns": [
                      "name"
                  ],
                  "limit": "1"
              }
                })
          })
              .then((response) => response.json())
              .then((responseJson) => {
           Alert.alert("Author name at 0th index:  " + responseJson[0].name);
              })
              .catch((error) => {
                console.error(error);
              });
          }
 render()
 { 
    return(
       <View  style={styles.principal}>
           <View style={styles.divlogo}>
        <Image style={styles.logo}
          source={require('./Includes/img/logo.png')}
        />
        <Text style={styles.h4}>Next Game</Text>
        <Text style={styles.h2}>3 PM GMT-04:00</Text>
        <Text style={styles.h3}>$5,000 prize</Text>
        <View style={styles.containerInfo}>
            <Image style={styles.imgPerfil}
            source={require('./Includes/img/users/default.png')}
            />
             <TouchableHighlight onPress={() => this.props.navigation.navigate('ContentSettings')} style={styles.buttonMore}>
             <Icon style={styles.iconMore}
                name='ios-more'
                type='ionicon'
                />
            </TouchableHighlight>
            <Text>Jesus Castillo</Text>
            <Row >
                <Col  style={{backgroundColor:"#ffffff",height:100,justifyContent: 'center',
        alignItems: 'center',borderStyle: 'solid',
        borderRightWidth: 1,borderTopWidth: 2,borderTopColor: '#aaaaaa',
        borderRightColor: '#aaaaaa'}} sm={6} md={4} lg={3}>
                <Text>
                    First Column
                </Text>
                </Col>
                <Col style={{backgroundColor:"#ffffff",height:100,justifyContent: 'center',
        alignItems: 'center',borderStyle: 'solid',
        borderLeftWidth: 1,borderTopWidth: 2,borderTopColor: '#aaaaaa',
        borderLeftColor: '#aaaaaa'}}  sm={6} md={4} lg={3}>
                <Text>
                    Second Column
                </Text>
                </Col>
            </Row>      
        </View>
        </View>
        <Row>
                <Col style={{height:100,justifyContent: 'center',
        alignItems: 'center'
        }} sm={6} md={4} lg={3}>
            <TouchableHighlight onPress={this.handlePress.bind(this)} style={styles.buttonsLinks}>
        <Text>button 1</Text>
       </TouchableHighlight>
                </Col>
                <Col style={{height:100,justifyContent: 'center',
        alignItems: 'center'}}  sm={6} md={4} lg={3}>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('ContentSettings')} style={styles.buttonsLinks}>
        <Text>button 2</Text>
       </TouchableHighlight>
                </Col>
            </Row>
        
       </View>
    );
 }
}
class CQuestions extends Component
{
 render()
 {
    return(
       <View >
 
          <Questions />
          <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('ContentPrincipal')}
        />
       </View>
    );
 }
}
// inicio Settings view content
class SettingsTitle extends React.Component {
    _onPressButton() {
        Alert.alert('Cerrando session..')
      }
    render() {
      return (
        <View style={{ flex: 1 }}>
        <Text>Settings</Text>
        <TouchableHighlight onPress={this._onPressButton} style={styles.buttonLogout}>
        <Text style={{ color: '#ffffff' }}>Logout</Text>
            </TouchableHighlight>
        </View>
      );
    }
  }

class CSettings extends Component
{
static navigationOptions = {
    // headerTitle instead of title
    headerTitle: <SettingsTitle />,
};
 render()
 {
    return(
       <View >
          <VSettings />
       </View>
    );
 }
}

 // fin Settings view content
const RootStack = StackNavigator(
    {
    ContentPrincipal: {
        screen: CPrincipal,
      },
    ContentQuestions: {
        screen: CQuestions,
      },
    ContentFriends: {
        screen: CFriends,
      },
    ContentSettings: {
        screen: CSettings,
      },
    },
    {
      initialRouteName: 'ContentPrincipal',
    }
  );
  export default class Content extends React.Component {
    render() {
      return <RootStack />;
    }
  }
  const styles = StyleSheet.create({
    logo:{
        width: 60,height:30,
        marginTop:10,
        marginBottom:10
        
    },
    imgPerfil:{
        width: 60,height:60,
        marginTop:10
        
    },
    divlogo:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    principal:{
        backgroundColor: '#36399a',
        flex:1,
        height:'100%'
    },
    containerInfo:{
        backgroundColor:'#ffffff',
        width:'90%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius:10,
    },
    h4:{
        color:'#ffffff',
        fontSize: 14,
    },
    h3:{
        color:'#ffffff',
        fontSize: 16,
    },
    h2:{
        color:'#ffffff',
        fontSize: 18,
    },
    h1:{
        color:'#ffffff',
        fontSize: 20,
    },
    buttonMore:{
        position:'absolute',
        right: 10,
        top: 10,
        width:25,
        height:25,
        backgroundColor:'#D8D8D8',
        borderRadius:12.5
    },
    iconMore:{
        width:5,
        height:5,
        fontSize:5,
        color:'#ffffff'
    },
    buttonLogout:{
        position:'absolute',
        right: 10,
        width:'auto',
        paddingLeft:10,
        paddingRight:10, 
        height:25,
        backgroundColor:'#FF0040',
        borderRadius:12.5
    },
    container:{
     
      
    },
    col6:{width:'50%',
    height:100,
    backgroundColor:"#333333",
    padding: 5,
},
buttonsLinks:{
borderRadius:12.5,
width:'auto',
padding: 10,
paddingLeft: 20,
paddingRight: 20,
        backgroundColor:'#61A1D5'
}
})