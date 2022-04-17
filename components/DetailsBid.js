import { View, Text, Image } from 'react-native'
import React from 'react'
import { FONTS, SIZES, COLORS } from './../constants';
import { ETHPrice } from './SubInfo';

export default function DetailsBid({ data }) {
  return (
    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: SIZES.base, paddingHorizontal: SIZES.medium }}>
      <Image source={data.image} style={{ width: 48, height: 48 }} />

      <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
        <View>
          <Text style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.small,
            color: COLORS.primary
          }}>Bid placed by {data.name}</Text>
        </View>

        <View>
          <Text style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small - 2,
            color: COLORS.secondary
          }}>{data.date}</Text>
        </View>
      </View>

      <ETHPrice price={data.price} />
    </View>
  )
}