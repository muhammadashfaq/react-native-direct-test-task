import {
  Image, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import React from 'react';
import { appIcons, colors, size } from '../../utilities';

const styles = StyleSheet.create({
  main: {
    backgroundColor: colors.blue,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  iconStyle: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor: colors.green5,
  },
  headerText: {
    color: colors.white,
    fontSize: size.h5,
    fontWeight: '700',
  },
});

function MarketHeader({ title }) {
  return (
    <View style={styles.main}>
      <Text style={styles.headerText}>{title}</Text>
      <TouchableOpacity>
        <Image source={appIcons.search} style={styles.iconStyle} />
      </TouchableOpacity>
    </View>
  );
}

export { MarketHeader };