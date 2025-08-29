import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.textHeading}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardEleveted]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardEleveted]}>
          <Text>me</Text>
        </View>
        <View style={[styles.card, styles.cardEleveted]}>
          <Text>to</Text>
        </View>
        <View style={[styles.card, styles.cardEleveted]}>
          <Text>scroll</Text>
        </View>
        <View style={[styles.card, styles.cardEleveted]}>
          <Text style={styles.textStyle }>more....</Text>
        </View>
        <View style={[styles.card, styles.cardEleveted]}>
          <Text>😂😂</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCards;

const styles = StyleSheet.create({
  textHeading: {
    color: 'blue',
    fontSize: 21,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    padding: 8,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    margin: 8,
    borderRadius: 8,
   
  },

  textStyle: {
     color: "yellow",
    fontSize: 29,
    fontWeight: "bold"
  },
  cardEleveted: {
    backgroundColor: 'green',
    // elevation: 4 only working for android mobile
    shadowOffset: {
      width : 0,
      height : 2
    }
  },
});
