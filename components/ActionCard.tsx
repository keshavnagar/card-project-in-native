import { StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native'
import React from 'react'

const ActionCard = () => {
  return (
    <View>
      <TouchableOpacity style={styles.StyleGoogleButton} onPress={() => Linking.openURL('https://google.com')}>
        <Text style={styles.StyleGoogleButtonText}>
          Google
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default ActionCard

const styles = StyleSheet.create({
  StyleGoogleButton: {
    marginLeft: 15,
    borderRadius: 12,
    backgroundColor: '#FAE4CC',
    fontSize: 21,
    elevation: 5,
    width: 200,
    height: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  StyleGoogleButtonText: {
    fontSize: 21,
    color: '#4E0207',
    fontWeight: 'bold'
  }
})