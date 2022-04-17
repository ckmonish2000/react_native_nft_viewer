import { View, Text, Image } from 'react-native'
import React from 'react'
import { SIZES, COLORS, SHADOWS, assets, FONTS, } from '../constants'


export function NFTTitle({ title, titleSize, subTitle, subTitleSize, }) {
  return (
    <View style={{ backgroundColor: COLORS.white, padding: SIZES.font }}>
      <Text style={{ fontFamily: FONTS.semiBold, fontSize: titleSize, color: COLORS.primary }}>{title}</Text>
      <Text style={{ fontFamily: FONTS.semiBold, fontSize: subTitleSize }}>{subTitle}</Text>
    </View>
  )
}


export function ETHPrice({ price }) {
  return (
    <View style={{ width: "100%", flexDirection: 'row', paddingHorizontal: SIZES.font, paddingVertical: 8, alignItems: 'center', marginBottom: 5 }}>
      <Image source={assets.eth} style={{ width: 15, height: 15 }} />
      <Text style={{ fontFamily: FONTS.bold }}>{price}</Text>
    </View>
  )
}

export function ImageCmp({ img, idx }) {
  return (
    <Image source={img} resizeMode='contain' style={{ width: 40, height: 40, marginLeft: idx === 0 ? 0 : -SIZES.font, marginTop: -15 }} />
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
      elevation: 1,
      maxWidth: "50%",
      flexDirection: 'column',
      height: 50,
      marginTop: -15,
      ...SHADOWS.light,
    }}>
      <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.small }}>Ending in</Text>
      <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.medium }}>12h 30m</Text>
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
      backgroundColor: COLORS.white
    }}>
      <People />
      <EndDate />
    </View>
  )
}