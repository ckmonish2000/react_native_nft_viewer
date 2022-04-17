import { View, Text, Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { COLORS, SHADOWS, SIZES, assets } from '../constants';
import { CircleButton } from './CircleButton';
import { SubInfo, NFTTitle, ETHPrice } from './SubInfo';

export default function NFTCard({ data }) {
  const navigation = useNavigation();

  return (
    <View style={{
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      margin: SIZES.base,
      ...SHADOWS.medium,
      // overflow: 'hidden',
    }}>
      <View style={{ height: 250, width: '100%' }}>
        <Image source={data.image}
          resizeMode='stretch'
          style={{ width: '100%', height: '100%', borderTopLeftRadius: SIZES.font, borderTopRightRadius: SIZES.font }}
        />

        <CircleButton right={10} top={10} imgUrl={assets.heart} />

        <View style={{ position: 'absolute', bottom: 0, width: '100%', backgroundColor: COLORS.white }}>
          <SubInfo />

          <View style={{ width: '100%' }}>
            <NFTTitle
              title={data.name}
              subTitle={data.creator}
              titleSize={SIZES.large}
              subTitleSize={SIZES.small}
            />

          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: SIZES.font }}>
            <ETHPrice price={data.price} />
            {/* <Button title='More Info' /> */}
            <TouchableOpacity style={{ ...SHADOWS.medium, backgroundColor: COLORS.primary, borderRadius: SIZES.base, padding: 8, marginBottom: SIZES.base, fontSize: SIZES.font }}>
              <Text style={{ color: COLORS.white }}>More Info</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>


    </View>
  )
}