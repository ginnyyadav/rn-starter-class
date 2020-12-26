import React, {useState} from 'react';
import {Text, StyleSheet, View, Button, FlatList} from 'react-native';

const ColorScreen = () => {
    const [colors, setColors] = useState([]);
    return (
        <View>
            <Button
            title="Add A Color"
            onPress= { ()=> {
                setColors([...colors, randomRGB()]);
            }}
            />
            <View style={{height: 100, width: 100, margin: 5, backgroundColor: randomRGB()}}
            />
            <FlatList
                data={colors}
                keyExtractor={(item) => item}
                renderItem={({item}) => {
                    return (
                        <View 
                            style={{height: 100, width: 100, margin: 5, backgroundColor: item }}
                        />
                    );
                }}
            />
        </View>
    );
};

const randomRGB = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create ({});

export default ColorScreen;