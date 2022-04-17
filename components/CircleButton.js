import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, SIZES, SHADOWS } from './../constants/theme';

export function CircleButton({ top, right, imgUrl, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        position: 'absolute',
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        margin: 5,
        right: 0,
        ...SHADOWS.light
      }}>
      <Image resizeMode='contain' source={imgUrl} style={{ width: '70%', height: '70%' }} />
    </TouchableOpacity>
  )
}