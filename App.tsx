import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'
import FlatListEg from './components/FlatListEg'
import OurProducts from './components/OurProducts'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView >
        {/* <FlatCards />
        <ElevatedCards />
        <FancyCard />
        <FancyCard />
        <ActionCard/>
        <FlatListEg/> */}
        <OurProducts/>
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