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
        featureIconImage: "..Images/featureIconImage/lsicon_leaf-filled.svg",
        image: "..Images/productImage.png",
    },
    {
        id: "1",
        name: "Beard oil - 100 ml",
        price: 299,
        oldPrice: 399,
        discount: "(25%OFF)",
        description: "100% natural oil",
        rating: 4.1,
        reviews: 5802,
        featureIconImage: "..Images/featureIconImage/lsicon_leaf-filled.svg",
        image: "..Images/productImage.png",
    },
    {
        id: "1",
        name: "Beard oil - 100 ml",
        price: 299,
        oldPrice: 399,
        discount: "(25%OFF)",
        description: "100% natural oil",
        rating: 4.1,
        reviews: 5802,
        featureIconImage: "..Images/featureIconImage/lsicon_leaf-filled.svg",
        image: "..Images/productImage.png",
    },
    {
        id: "1",
        name: "Beard oil - 100 ml",
        price: 299,
        oldPrice: 399,
        discount: "(25%OFF)",
        description: "100% natural oil",
        rating: 4.1,
        reviews: 5802,
        featureIconImage: "..Images/featureIconImage/lsicon_leaf-filled.svg",
        image: '..Images/productImage.png',
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
                                <Image source={require(element.item.image)}style={styles.ImageStyle}/>
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