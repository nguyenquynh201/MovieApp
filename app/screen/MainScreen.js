import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Tabs from '@/navigation/tabs';
export class MainScreen extends Component {
    render() {
        return (
            <Tabs />
        )
    }
}

export default MainScreen;