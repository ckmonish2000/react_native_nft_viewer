import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'

import { ETHPrice, NFTTitle } from "../components/SubInfo"

export default function DetailsDesc({ data }) {
  return (
    <View style={style.root}>
      <NFTTitle title={data.name} subTitle={data.creator} />
    </View>
  )
}

const style = StyleSheet.create({
  root: {
    marginTop: 20
  }
})