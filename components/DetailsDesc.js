import { View, Text, StyleSheet, Touchable } from 'react-native'
import React, { useState } from 'react'

import { ETHPrice, NFTTitle } from "../components/SubInfo"
import { SIZES, FONTS } from '../constants'
import { COLORS } from './../constants/theme';

export default function DetailsDesc({ data }) {
  const [text, settext] = useState(data.description.slice(0, 200))
  const [readmore, setreadmore] = useState(false)
  return (
    <View style={{ backgroundColor: "white" }}>
      <View style={style.root}>
        <NFTTitle title={data.name} subTitle={data.creator} titleSize={SIZES.extraLarge} subTitleSize={SIZES.font} />
        <View style={{ paddingHorizontal: SIZES.font }}>
          <ETHPrice price={data.price} />
        </View>
      </View>

      <View style={style.desc}>
        <Text style={{ fontSize: SIZES.font, fontFamily: FONTS.semiBold, color: COLORS.primary }}>Description</Text>
      </View>

      <View style={{ padding: SIZES.font }}>
        <Text style={{ marginTop: SIZES.base, fontSize: SIZES.font, fontFamily: FONTS.regular, color: COLORS.secondary, lineHeight: SIZES.large }}>
          {text}{!readmore ? "..." : ""}
          {!readmore ?

            <Text
              onPress={() => { setreadmore(true); settext(data.description) }}
              style={{ marginLeft: 10, fontSize: SIZES.medium, fontFamily: FONTS.semiBold, color: COLORS.primary }}>Read More</Text>
            :
            <Text
              onPress={() => { setreadmore(false); settext(data.description.slice(0, 250)) }}
              style={{ marginLeft: 10, fontSize: SIZES.medium, fontFamily: FONTS.semiBold, color: COLORS.primary }}>Show less</Text>

          }
        </Text>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  root: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  desc: {
    paddingHorizontal: SIZES.font,
  }
})