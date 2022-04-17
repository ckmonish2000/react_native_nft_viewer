import React, { useState } from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import { COLORS, NFTData } from '../constants';

import { HomeHeader, NFTCard, FocusedStatusBar } from "../components"

const Home = () => {
  const [data, setdata] = useState(null);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      {/*  */}
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            renderItem={({ item }) => <NFTCard data={item} />}
            data={NFTData}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            ListHeaderComponent={() => <HomeHeader />}
          />
        </View>

        <View style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: -1
        }}>
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ height: 300, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>)
}
export default Home
