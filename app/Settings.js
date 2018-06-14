import React, {Component} from 'react'
import{
    Text,
    View,
    StyleSheet,
    Button

} from 'react-native'
import { StackNavigator } from 'react-navigation';
import { Col, Row, Grid } from "react-native-easy-grid";
export default class Settings extends Component{
    render(){
        return (
            <View>
                <Text>Settings</Text>
                <Grid>
                    <Col><View  ><Text>Balance</Text></View></Col>
                    <Col><Text>Weekly Rank</Text></Col>
                </Grid>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})