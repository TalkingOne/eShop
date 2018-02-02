/**
 *  Class: NavigationBar
 *  Author: xyl
 *  Date: 2018/2/2.
 *  Description:
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import TabBarNavigation from "./TabBarNavigation";
const AppStack = StackNavigator(
    {
    Tab:{screen:TabBarNavigation}
    },
)

export default AppStack;
