import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'

import { ETHPrice, NFTTitle } from "../components/SubInfo"
import { SIZES } from '../constants'

export default function DetailsDesc({ data }) {
  return (
    <View style={style.root}>
      <NFTTitle title={data.name} subTitle={data.creator} titleSize={SIZES.extraLarge} subTitleSize={SIZES.font} />
      <View style={{ paddingHorizontal: SIZES.font }}>
        <ETHPrice price={data.price} />
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  root: {
  }
})