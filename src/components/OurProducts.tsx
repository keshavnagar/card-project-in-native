import { StyleSheet, Text, View, ScrollView, FlatList, Image } from 'react-native'
import React from 'react'

const products = [
    {
        id: "1",
        name: "Beard oil - 100 ml",
        price: 299,
        oldPrice: 399,
        discount: "(25%OFF)",
        description: "100% natural oil",
        rating: 4.1,
        reviews: 5802,
        featureIconImage: require("../Images/OurProduct/lsicon_leaf-filled.svg"),
        image: require("../Images/OurProduct/productImage.png"),
    },
    {
        id: "2",
        name: "Beard oil - 100 ml",
        price: 299,
        oldPrice: 399,
        discount: "(25%OFF)",
        description: "100% natural oil",
        rating: 4.1,
        reviews: 5802,
        featureIconImage: require("../Images/OurProduct/lsicon_leaf-filled.svg"),
        image: require("../Images/OurProduct/productImage.png"),
    },
    {
        id: "3",
        name: "Beard oil - 100 ml",
        price: 299,
        oldPrice: 399,
        discount: "(25%OFF)",
        description: "100% natural oil",
        rating: 4.1,
        reviews: 5802,
        featureIconImage: require("../Images/OurProduct/lsicon_leaf-filled.svg"),
        image: require("../Images/OurProduct/productImage.png"),
    },
    {
        id: "4",
        name: "Beard oil - 100 ml",
        price: 299,
        oldPrice: 399,
        discount: "(25%OFF)",
        description: "100% natural oil",
        rating: 4.1,
        reviews: 5802,
        featureIconImage: require("../Images/OurProduct/lsicon_leaf-filled.svg"),
        image: require("../Images/OurProduct/productImage.png"),
    }
];


const OurProducts = () => {
    return (
        <View>
            <Text>Our Products</Text>
            <View>
                <FlatList
                    data={products} renderItem={(element) => {
                        return (
                            <View>
                                <Image source={element.item.image} style={styles.ImageStyle} />
                                <Text>{element.item.name}</Text>
                                <Text>₹{element.item.price}</Text>
                                <Text>{element.item.oldPrice}</Text>
                                <Text>{element.item.discount}</Text>
                                <Image source={element.item.featureIconImage} style={styles.ImageStyle} />
                                <Text>{element.item.description}</Text>
                                <Text>{element.item.rating}</Text>
                               
                               
                            </View>
                        )
                    }}
                />
            </View>
        </View>
    )
}

export default OurProducts

const styles = StyleSheet.create({
    ImageStyle: {
        width: 142,
        height: 135
    }
})