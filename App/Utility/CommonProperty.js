/**
 *  Class: CommonProperty
 *  Author: xyl
 *  Date: 2018/2/2.
 *  Description:
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';
//存储 共用的 常量属性
export default Common = {
    //尺寸
    WIDTH:Dimensions.get('window').width,
    HEIGHT:Dimensions.get('window').height,
    //颜色
    DEFAULT_GREEN:'#8ec31e',
    DEFAULT_BLACK:'#333333',
    DEFAULT_GRAY:'#888888',
}
