import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
    const yourName = 'The Ginny';
    return (
        <View style={{alignItems: 'center'}}>
            <Text style={styles.textStyle}>Getting started with react native!</Text>
            <Text style={{fontSize: 20}}>...I am {yourName}</Text>
        </View>
    );
};

const styles = StyleSheet.create ({
    textStyle: {
        fontSize: 45,
        margin: 15
    }
});

export default ComponentsScreen;