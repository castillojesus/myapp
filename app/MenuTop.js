import React, {Component} from 'react'
import{
    Text,
    View,
    StyleSheet

} from 'react-native'

export default class MenuTop extends Component{
    render(){
        return (
            <View style={styles.content}>
                <Text style={styles.titleTop}>
                Questions app
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    content:{
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#81c04d',
        flexDirection: 'row',
    },
    titleTop:{
        flex: 1,
        color: '#ffffff',
        textAlign: 'center'
        
    }
})