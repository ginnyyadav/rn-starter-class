import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';

const ImageDetail= ({imageSource, title, imageScore}) => {
    return (
        <View style={styles.viewStyle}>
            <Image source={imageSource}/>
            <Text style={styles.textStyle}>{title}</Text>
            <Text style={styles.textStyle}>Score: {imageScore}</Text>
        </View>
    );
};

const styles = StyleSheet.create ({
    textStyle: {
        fontSize: 15
    },
    viewStyle: {
        alignItems: 'center',
        margin: 15
    }
});

export default ImageDetail;