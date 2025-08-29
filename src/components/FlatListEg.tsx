import { StyleSheet, Text, View, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
const FlatListEg = () => {
    const Products = [
        {
            image: require('../Images/man-holding-face-oil-bottle.jpg'),
            title1: "Beard Oil  -  100 ml",
            price: "₹ 299",
            priceCut: "399",
            discount: "(24% OFF)",
            logo: require('../Images/leaf.png'),
            description: "100 % natural oil",
            rating: "4.1",
            startLogo: require('../Images/star.png'),
            totalRating: "(9879)"
        },
        {
            image: require('../Images/man-holding-face-oil-bottle.jpg'),
            title1: "Beard Oil  -  100 ml",
            price: "₹ 299",
            priceCut: "399",
            discount: "(24% OFF)",
            logo: require('../Images/leaf.png'),
            description: "100 % natural oil",
            rating: "4.1",
            startLogo: require('../Images/star.png'),
            totalRating: "(9879)"
        },
        {
            image: require('../Images/man-holding-face-oil-bottle.jpg'),
            title1: "Beard Oil  -  100 ml",
            price: "₹ 299",
            priceCut: "399",
            discount: "(24% OFF)",
            logo: require('../Images/leaf.png'),
            description: "100 % natural oil",
            rating: "4.1",
            startLogo: require('../Images/star.png'),
            totalRating: "(9879)"
        },
        {
            image: require('../Images/man-holding-face-oil-bottle.jpg'),
            title1: "Beard Oil  -  100 ml",
            price: "₹ 299",
            priceCut: "399",
            discount: "(24% OFF)",
            logo: require('../Images/leaf.png'),
            description: "100 % natural oil",
            rating: "4.1",
            startLogo: require('../Images/star.png'),
            totalRating: "(9879)"
        }
    ]
    return (

        <View>
            <View style={styles.HeadingContainer}>
                <Text style={styles.headingText}>Get Our Product</Text>
                <TouchableOpacity>
                    <Text style={styles.seeAllStyle}>See All</Text>
                </TouchableOpacity>
            </View>
            <FlatList horizontal={true} data={Products} renderItem={(element) => {

                return (<View style={styles.cardStyle}>
                    <Image source={element.item.image} style={styles.imageStyle} />
                    <View style={styles.titleContainer} >
                        <Text style={styles.titleStyle}> {element.item.title1}</Text>
                    </View>
                    <View style={styles.priceContainer}>
                        <View style={styles.priceContaineFirstChild}>
                            <Text style={styles.priceStyle}>{element.item.price}</Text>
                            <Text style={styles.priceCut}>{element.item.priceCut}</Text>
                        </View>
                        <Text style={styles.discountStyle} >{element.item.discount}</Text>
                    </View>
                    <View style={styles.logoDescContain}>
                        <Image style={styles.logoStyle} source={element.item.logo} />
                        <Text style={styles.descriptionStyle}>{element.item.description}</Text>
                    </View>
                    <View style={styles.ratingContainer} >
                        <View style={styles.ratingSubContainer}>
                            <Text style={styles.ratingStyle}>{element.item.rating}</Text>
                            <Image style={styles.starLogoStyle} source={element.item.startLogo} />
                        </View>
                        <Text style={styles.totalRating}>{element.item.totalRating}</Text>
                    </View>
                </View>)
            }} />
        </View>
    )

}



export default FlatListEg

const styles = StyleSheet.create({
    cardStyle: {
        height: 260,
        width: 200,
        backgroundColor: '#ffffff',
        margin: 10,
        borderRadius: 24,
        padding: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation: 16
    },
    imageStyle: {
        height: '58%',
        width: '100%',
        borderRadius: 16
    },
    titleContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    priceContainer: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    priceContaineFirstChild: {
        width: '45%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    priceStyle: {
        fontSize: 15
    },
    priceCut: {
        textDecorationLine: 'line-through',
        color: 'gray',
        opacity: 0.5,
        fontSize: 15
    },
    discountStyle: {
        fontSize: 15,
        color: '#159d0eff'
    },
    logoStyle: {
        width: 24,
        height: 24
    },
    logoDescContain: {
        width: '90%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 10
    },
    descriptionStyle: {
        fontSize: 15
    },
    starLogoStyle: {
        width: 15,
        height: 15
    },
    ratingContainer: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 20
    },
    ratingSubContainer: {
        width: '30%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#17a504ff',
        borderRadius: 12,
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 4,
        paddingRight: 4
    },
    totalRating: {
        fontSize: 15,
        color: 'gray',
        opacity: 0.5
    },
    ratingStyle: {
        fontSize: 13,
        fontWeight: 'bold',
        color: "#ffffff"
    },
    HeadingContainer: {
         width: '100%',
         flexDirection: 'row',
         justifyContent: 'space-between',  
    },
     headingText: {
        fontSize:20,
        marginLeft: 20,
        fontWeight: 'bold'
     },
     seeAllStyle: {
        marginRight: 20,
        color: '#0cd13dff'
     }


})