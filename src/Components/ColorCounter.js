import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const ColorCounter= ({color, onIncrease, onDecrease}) => {
    return (
        <View style={styles.viewStyle}>
           <Text style={styles.textStyle}> {color} </Text>
           <Button 
           onPress={() => onIncrease()}
           title={`Increase ${color}`}
           />
           <Button
           onPress={() => onDecrease()} 
           title={`Decrease ${color}`}
           />
        </View>
    );
};

const styles = StyleSheet.create ({
    viewStyle: {
        margin: 15,
    },
    textStyle: {
        alignSelf: 'center',
        fontSize: 24,
        fontWeight: 'bold'
    }
});

export default ColorCounter;