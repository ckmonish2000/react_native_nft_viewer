import { View, Text, Image } from 'react-native'
import React from 'react'
import { SIZES, COLORS, SHADOWS, assets, FONTS, } from '../constants'


export function NFTTitle() {
  return (
    <View>
      <Text>SubInfo</Text>
    </View>
  )
}


export function ETHPrice() {
  return (
    <View>
      <Text>ETHPRICE</Text>
    </View>
  )
}

export function ImageCmp({ img, idx }) {
  return (
    <Image source={img} resizeMode='contain' style={{ width: 35, height: 30, marginLeft: idx === 0 ? 0 : -SIZES.font, marginTop: -10 }} />
  )
}

export function People() {
  const people = [assets.person01, assets.person02, assets.person03, assets.person04]
  return (
    <View style={{ flexDirection: 'row' }}>
      {people.map((img, idx) => {
        return <ImageCmp img={img} idx={idx} />
      })}
    </View>
  )
}

export function EndDate() {
  return (
    <View style={{
      paddingHorizontal: SIZES.font,
      paddingVertical: SIZES.base,
      backgroundColor: COLORS.white,
      justifyContent: 'center',
      alignItems: 'center',
      ...SHADOWS.light,
      elevation: 1,
      maxWidth: "50%"
    }}>
      <Text>SubInfo</Text>
    </View>
  )
}

export function SubInfo() {
  return (
    <View style={{
      width: '100%',
      paddingHorizontal: SIZES.font,
      marginTop: -SIZES.extraLarge,
      flexDirection: 'row',
      justifyContent: 'space-between',
    }}>
      <People />
      <EndDate />
    </View>
  )
}