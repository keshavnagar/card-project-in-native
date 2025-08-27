import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'


const App = () => {
  return (
    <SafeAreaView>
      <ScrollView >
        <FlatCards/>
        <ElevatedCards/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  // container: {
  //   color: "red"
  // }
})