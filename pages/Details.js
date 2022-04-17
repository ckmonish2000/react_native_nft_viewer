import React from 'react';
import { Text, View, StyleSheet, Images } from 'react-native';
import { COLORS, FONTS, SHADOWS, SIZES, assets } from '../constants';
import { SubInfo } from "../components/SubInfo "
import { FocusedStatusBar } from "../components/FocusedStatusBar"
import DetailsBid from "../components/DetailsBid"
import DetailsDesc from "../components/DetailsDesc"

const Details = ({ route, navigation }) => {
  console.log(route.params.data.name)
  return (
    <View>
      <Text style={style.text}>Details</Text>
    </View>
  );
}

const style = StyleSheet.create({
  text: {
    fontSize: 100,
    fontFamily: FONTS.semiBold,
  },
});

export default Details;
