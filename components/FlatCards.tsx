import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
export default function FlatCards() {
    return (
        <View>
            <Text style={styles.textHeading}>FlatCards</Text>
            <View style={styles.container}>
                <View style={[styles.card, styles.cardOne]}>
                    <Text style={styles.CardText}>
                        Red
                    </Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text style={styles.CardText}>
                        Blue
                    </Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text style={styles.CardText}>
                        Orange
                    </Text>
                </View>
                <View style={[styles.card, styles.cardOne]}>
                    <Text style={styles.CardText}>
                        Red
                    </Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text style={styles.CardText}>
                        Blue
                    </Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text style={styles.CardText}>
                        Orange
                    </Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    textHeading: {
        fontSize: 21,
        color: "#1503dbff",
        fontWeight: "bold",
        paddingHorizontal: 8
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 9,
        
    },
    card: {
        height: 160,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
        borderRadius: 8
    },
    cardOne: {
        backgroundColor: "#f23215ff"
    },
    cardTwo: {
        backgroundColor: "#128af3ff"
    },
    cardThree: {
        backgroundColor: "#eda217ff"
    },
    CardText: {
        color: "white",
        
    }
})