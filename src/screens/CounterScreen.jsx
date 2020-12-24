import React, {useState} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);
    return (
        <View style={{alignItems: 'center'}}> 
            <Text 
                style={{fontSize: 40, marginTop: 15, marginBottom: 15 }}
            >
                    Current Count: {counter}
            </Text>
            <Button
                title="Increase"
                onPress= {()=> {
                    setCounter (counter + 1);
                }}
            />
            <Button 
                title="Decrease"
                onPress= {()=> {
                    setCounter (counter - 1);
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create ({
});

export default CounterScreen;
