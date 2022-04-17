import { View, Text } from 'react-native'
import React from 'react'

export default function DetailsBid({ data }) {
  console.log(data, "data")
  return (
    <View>
      <Text>{data.name}</Text>
    </View>
  )
}