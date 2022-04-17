import React from 'react';
import { Text, View, StyleSheet, Images, SafeAreaView, FlatList } from 'react-native';
import { COLORS, FONTS, SHADOWS, SIZES, assets } from '../constants';
import { SubInfo } from "../components/SubInfo "
import FocusedStatusBar from "../components/FocusedStatusBar"
import DetailsBid from "../components/DetailsBid"
import DetailsDesc from "../components/DetailsDesc"

const Details = ({ route, navigation }) => {
  console.log(route.params.data.bids)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
      // translucent={true}
      />

      {/* place a bid */}
      <View style={{ width: '100%', position: 'absolute', bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
        <View style={style.placeBid}>
          <Text style={style.font}>Place a bid</Text>
        </View>
      </View>

      {/* flat list for bids */}
      <FlatList
        data={route.params.data.bids}
        render={({ item }) => { return <DetailsBid /> }}
      />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  text: {
    fontSize: 100,
    fontFamily: FONTS.semiBold,
  },
  placeBid: {
    backgroundColor: COLORS.primary,
    borderRadius: 500,
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.medium,
    zIndex: 1,
    width: '50%',
    marginVertical: 25
  },
  font: {
    color: COLORS.white,
    fontFamily: FONTS.semiBold,
    fontSize: 20,
    textAlign: 'center'
  }
});

export default Details;
