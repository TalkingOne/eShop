/**
 *  Class: CartPage
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

export default class CartPage extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    CartPage
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

});
