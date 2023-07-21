import React from 'react';
import {
  Image, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import PropTypes from 'prop-types';
import { Divider } from '@rneui/themed';
import { colors, size } from '../../utilities';

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    marginHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingVertical: 10,
    paddingHorizontal: 6,
  },
  titleText: {
    color: colors.b8,
    fontWeight: '300',
    fontSize: size.small,
    marginBottom: 4,
  },
  descText: {
    color: colors.b6,
    fontWeight: '300',
    fontSize: size.xxsmall,
  },
  preValText: {
    color: colors.green1,
    fontWeight: '500',
    fontSize: size.small,
    width: '25%',
    textAlign: 'center',
  },
  valText: {
    color: colors.b8,
    fontWeight: '500',
    fontSize: size.small,
    width: '25%',
    textAlign: 'right',
  },
  imageStyle: {
    width: 35,
    height: 35,
    borderRadius: 35,
    marginRight: 10,
  },
  leftCont: {
    width: '50%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  descView: {
    flexDirection: 'column',
  },
});

function MarketChart({ item, onPress }) {
  return (
    <>
      <TouchableOpacity style={styles.main} onPress={onPress}>
        <View style={styles.leftCont}>
          <Image source={item?.image} style={styles.imageStyle} />
          <View style={styles.descView}>
            <Text style={styles.titleText}>{item?.title}</Text>
            <Text style={styles.descText} numberOfLines={1}>
              {item?.description}
            </Text>
          </View>
        </View>
        <Text style={styles.preValText}>
          +
          {item?.preValuePer}
          %
        </Text>
        <Text style={styles.valText}>{item?.preValue}</Text>
      </TouchableOpacity>
      <Divider color={colors.g4} />
    </>
  );
}

MarketChart.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    preValuePer: PropTypes.number,
    preValue: PropTypes.number,
  }),
  onPress: PropTypes.func,
};

MarketChart.defaultProps = {
  item: {
    image: '',
    title: '',
    description: '',
    preValuePer: 0,
    preValue: 0,
  },
  onPress: () => {},
};

export { MarketChart };
