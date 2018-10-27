import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class RootNavigation extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>MyClass</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
            },
});