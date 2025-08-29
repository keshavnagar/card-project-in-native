import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FlatCards from './src/components/FlatCards'
import ElevatedCards from './src/components/ElevatedCards'
import FancyCard from './src/components/FancyCard'
import ActionCard from './src/components/ActionCard'
import FlatListEg from './src/components/FlatListEg'
import OurProducts from './src/components/OurProducts'

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