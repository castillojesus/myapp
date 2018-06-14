import React, {Component} from 'react'
import{
    Text,
    View,
    StyleSheet,
    Button

} from 'react-native'
import { StackNavigator } from 'react-navigation';
export default class Principal extends Component{
    render(){
        return (
            <View>
                <Text>Principal</Text>
                <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('ContentPrincipal')}
        />
          <Button
            title="Friends"
            onPress={() => this.props.navigation.push('ContentQuestions')}
          />
            </View>
        )
    }
}

const styles = StyleSheet.create({

})
