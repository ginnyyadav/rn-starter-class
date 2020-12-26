import React, {useState} from 'react';
import {Text, StyleSheet, View, Clipboard, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import ColorCounter from '../Components/ColorCounter';
//TODO: Make increment a user input
const COLOR_INCREMENT = 15;

const ColorCustomizerScreen = () => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const copyToClipboard = () => {
        Clipboard.setString(`RBG(${red}, ${blue}, ${green})`)
    }

    const setColor = (color, change) => {
        switch (color) {
            case 'red':
                //if either of these statements are true do null, otherwise setRed
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
                return;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                return;
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                return;
            default:
                return;
        }
        
    };

    return (
        <View>
            <ColorCounter 
            onIncrease={() => setColor('red', COLOR_INCREMENT)}
            onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
            color="Red"
            />
            <ColorCounter
            onIncrease={() => setColor('blue', COLOR_INCREMENT)}
            onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)} 
            color="Blue"
            />
            <ColorCounter
            onIncrease={() => setColor('green', COLOR_INCREMENT)}
            onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)} 
            color="Green"
            />
            <Text style={{alignSelf: 'center', marginTop: 50}}>Current RGB: {red}, {blue}, {green}</Text>
            <View style={{height: 150, width: 150, alignSelf: 'center', marginTop: 5, backgroundColor: `rgb(${red}, ${green}, ${blue})`}} />
            <TouchableOpacity style={{alignSelf:'center', margin: 5}}
            onPress={()=> copyToClipboard()}
            >
                <Text>Copy RGB color to clipboard</Text>
            </TouchableOpacity> 
        </View>
    );
};

const styles = StyleSheet.create ({});

export default ColorCustomizerScreen;