import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer, StackActions} from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
const Stack = createStackNavigator();

import Home from '../screens/Home'
import Detail from '../screens/Detail'

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode='none'>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Detail" component={Detail}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator

const styles = StyleSheet.create({})
