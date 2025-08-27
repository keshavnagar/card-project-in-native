import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const FancyCard = () => {
    return (
        <View>
            <Text style={styles.headingText}>Trending</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image source={require('../Images/solar-system.png')} style={styles.cardImage} />
                <View style={styles.cardBody}>
                    <Text style={styles.cardBodyTitle}>
                        The Solar System
                    </Text>
                    <Text style={styles.cardBodyDesc} >
                        Learn about planets, moons, and asteroids.
                    </Text>
                    <TouchableOpacity style={styles.cardBodyButton}>
                        <Text style={styles.cardBodyButtonText}>
                            Explore
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default FancyCard

const styles = StyleSheet.create({
    headingText: {
        color: "white",
        margin: 8,
        paddingLeft: 8,
        fontSize: 21
    },
    card: {

        width: 300,
        height: 400,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 12,
        marginLeft: 15
    },
    cardElevated: {
        backgroundColor: "#FAE4CC",
        elevation: 10, 
    },
    cardImage: {
        height: 150,
        width: '80%',
        borderRadius: 10,

    },
    cardBody: {
        width: '80%',
        alignItems: 'center',
        height: '40%',
        justifyContent: 'space-between'
    },
    cardBodyTitle: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#5F0404'
    },
    cardBodyDesc: {
        fontSize: 16,
        color: '#8D1D09'
    },
    cardBodyButton: {
        backgroundColor: '#4E0207',
        width: '100%',
        alignItems: 'center',
        padding: 8,
        borderRadius: 10
    },
    cardBodyButtonText: {
        fontSize: 22,
        color: '#FAE4CC',

    },
})