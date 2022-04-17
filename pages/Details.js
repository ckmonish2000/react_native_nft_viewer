import React from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SHADOWS, SIZES, assets } from '../constants';
import { SubInfo } from "../components/SubInfo "
import FocusedStatusBar from "../components/FocusedStatusBar"
import DetailsDesc from "../components/DetailsDesc"
import DetailsBid from './../components/DetailsBid';

const DetailsHeader = ({ data, navigation }) => {
  return (<View style={{ width: '100%', height: 373 }}>
    <Image
      resizeMode='cover'
      source={data.image}
      style={{ width: '100%', height: '100%' }}
    />
  </View>)
}

const Details = ({ route, navigation }) => {
  // console.log(route.params.data.bids)
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
        renderItem={({ item }) => <DetailsBid data={item} />}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => (
          < React.Fragment >
            <DetailsHeader data={route.params.data} navigation={navigation} />
          </React.Fragment>
        )
        }
      />

      <TouchableOpacity
        onPress={() => { navigation.goBack() }}
        style={style.back}>
        <Image source={assets.left} style={{ width: '100%', height: '100%' }} />
      </TouchableOpacity>
    </SafeAreaView >
  );
}

const style = StyleSheet.create({
  back: {
    position: 'absolute',
    left: 5,
    top: 5,
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.extraLarge,
    padding: 10,
    margin: 10
  },
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
