import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FONTS } from '../constants';

const Details = () => {
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
