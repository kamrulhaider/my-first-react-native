import React from 'react'
import { ImageBackground, StyleSheet } from 'react-native';

export default function Home() {
    return (
        <>
            <ImageBackground
                style={styles.background}
                source={require('../../../assets/native-bg.jpg')}
            />
        </>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
})