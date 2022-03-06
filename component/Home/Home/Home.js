import React from 'react'
import { ImageBackground, StyleSheet, View, Text } from 'react-native';
import { Link } from 'react-router-native';

export default function Home() {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../../../assets/native-bg.jpg')}
        >
            <View style={styles.exploreWorld}>
                <Link to="/explore">
                    <Text style={styles.btnText}>Explore World</Text>
                </Link>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    exploreWorld: {
        width: "70%",
        height: 70,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "white",
        backgroundColor: "rgba(0, 0, 0, 0.50)",
        justifyContent: "center",
        alignItems: "center",
    },
    btnText: {
        fontSize: 40,
        color: "white",
    },
})