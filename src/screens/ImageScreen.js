import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import ImageDetail from '../Components/ImageDetail';

const ImageScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Image Screen</Text>
            <ImageDetail 
                title="Forest" 
                imageSource={require('../../assets/forest.jpg')}
                imageScore= {9}
            />
            <ImageDetail 
                title="Beach" 
                imageSource={require('../../assets/beach.jpg')}
                imageScore= {7}
            />
            <ImageDetail 
                title="Mountain" 
                imageSource={require('../../assets/mountain.jpg')}
                imageScore= {8}
            />
        </View>
    );
};

const styles = StyleSheet.create ({
    textStyle: {
        fontSize: 20,
        margin: 15
    },
    viewStyle: {
        alignItems: 'center'
    }
});

export default ImageScreen;