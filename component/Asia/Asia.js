import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, Image, ScrollView } from 'react-native';
import { Link } from 'react-router-native';

const image = { uri: "https://images.pexels.com/photos/2413238/pexels-photo-2413238.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" };

export default class Asia extends Component {
    render() {
        return (
            <ImageBackground
                style={styles.background}
                source={image}
            >
                <ScrollView style={{ width: "100%" }}>
                    <Image
                        style={styles.imgStyle}
                        source={{ uri: 'https://images.pexels.com/photos/235731/pexels-photo-235731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}
                    ></Image>
                    <Image
                        style={styles.imgStyle}
                        source={{ uri: 'https://images.pexels.com/photos/235648/pexels-photo-235648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}
                    ></Image>
                    <Image
                        style={styles.imgStyle}
                        source={{ uri: 'https://images.pexels.com/photos/460376/pexels-photo-460376.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}
                    ></Image>
                </ScrollView>
                <View style={styles.home}>
                    <Link to="/">
                        <Text style={styles.btnText}>Home</Text>
                    </Link>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    home: {
        width: "50%",
        height: 50,
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 5,
        borderColor: "white",
        backgroundColor: "rgba(0, 0, 0, 0.50)",
        justifyContent: "center",
        alignItems: "center",
    },
    btnText: {
        fontSize: 40,
        color: "white",
    },
    imgStyle: {
        width: "98%",
        height: 300,
        resizeMode: "cover",
        borderRadius: 10,
        marginBottom: 1,
        borderColor: "white",
    },
})