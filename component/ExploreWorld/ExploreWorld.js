import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { Link } from 'react-router-native'

const image = { uri: "https://images.pexels.com/photos/9930150/pexels-photo-9930150.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" }

export default class ExploreWorld extends Component {
    render() {
        return (
            <ImageBackground
                style={styles.background}
                source={image}
                resizeMode="cover"
            >
                <View style={styles.btn}>
                    <Link to="/">
                        <Text style={styles.btnText}>Home</Text>
                    </Link>
                </View>
                <View style={styles.btn}>
                    <Link to="/asia">
                        <Text style={styles.btnText}>Asia</Text>
                    </Link>
                </View>
                <View style={styles.btn}>
                    <Link to="/europe">
                        <Text style={styles.btnText}>Europe</Text>
                    </Link>
                </View>
                <View style={styles.btn}>
                    <Link to="/africa">
                        <Text style={styles.btnText}>Africa</Text>
                    </Link>
                </View>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    btn: {
        width: "70%",
        height: 70,
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 4,
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