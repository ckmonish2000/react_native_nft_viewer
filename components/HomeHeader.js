import React from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import { COLORS, FONTS, SIZES, assets } from '../constants';

const HomeHeader = () => {
  return (
    <View style={style.rootHeader}>
      <View style={style.subRoot}>
        <Image source={assets.logo}
          resizeMode='contain'
          style={{ width: 90, height: 25 }} />

        <View style={{ width: 45, height: 45 }}>
          <Image source={assets.person01} resizeMode='contain' style={style.profile} />
        </View>

      </View>

      <View style={style.header}>
        <Text style={{ color: COLORS.white }}>Hello Victoria 👋</Text>
        <Text style={{ color: COLORS.white, fontFamily: FONTS.bold, fontSize: 20, marginTop: 5 }}>Let's choose a masterpeice</Text>
      </View>

      <View style={style.searchbar}>
        <Image source={assets.search} resizeMode='contain' style={{ width: 20, height: 20, marginRight: SIZES.base }} />
        <TextInput placeholder="Search NFT's" style={{ flex: 1, color: COLORS.white }} onChangeText={() => { }} />
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  rootHeader: {
    backgroundColor: COLORS.primary,
    padding: SIZES.font,
    marginBottom: 5
  },
  subRoot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profile: {
    width: '100%',
    height: '100%'
  },
  header: {
    fontFamily: FONTS.regular,
    color: COLORS.white,
    marginVertical: 15
  },
  searchbar: {
    borderWidth: 1,
    backgroundColor: COLORS.gray,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.small - 10,
    borderRadius: 10,
    marginTop: 15,

  }
})

export default HomeHeader