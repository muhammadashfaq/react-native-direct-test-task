import React from 'react';
import {
  Image, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import PropTypes from 'prop-types';
import { colors, size } from '../../utilities';

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    marginHorizontal: 10,
    borderRadius: 10,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    paddingVertical: 10,
    width: '45%',
    borderWidth: 1,
    borderColor: colors.g4,
    marginVertical: 15,
    paddingHorizontal: 10,
  },
  nameText: {
    color: colors.b8,
    fontWeight: '500',
    fontSize: size.small,
    marginVertical: 2,
  },
  companyText: {
    color: colors.g2,
    fontWeight: '500',
    fontSize: size.small,
    marginVertical: 2,
  },
  valueText: {
    color: colors.green1,
    fontWeight: '500',
    fontSize: size.small,
    marginVertical: 2,
  },
  pointsText: {
    color: colors.white,
    fontWeight: '500',
    fontSize: size.small,
    padding: 5,
  },
  imgStyle: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    borderRadius: 35,
  },
  viewPoint: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    left: -10,
  },
});

function WatchCard({ item, onPress, index }) {
  return (
    <TouchableOpacity style={styles.main} onPress={onPress} disabled>
      <View>
        <Text style={styles.nameText}>{item?.name}</Text>
        <Text style={styles.companyText}>{item?.company}</Text>
        <View  style={[styles.viewPoint, { backgroundColor: index % 3 === 0 ? colors.pink : colors.green5 }]}>
        <Text
          style={styles.pointsText}
        >
          {item?.points}
        </Text>
        </View>
        <Text style={[styles.valueText, { color: index % 3 === 0 ? colors.pink : colors.green1 }]}>
          {item?.value}
          {' '}
          {item?.percent}
          %
        </Text>
      </View>
      <Image source={item?.icon} style={styles.imgStyle} />
    </TouchableOpacity>
  );
}

WatchCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    company: PropTypes.string,
    points: PropTypes.string,
    value: PropTypes.string,
    percent: PropTypes.string,
    icon: PropTypes.string,
  }),
  onPress: PropTypes.func,
};

WatchCard.defaultProps = {
  item: {
    name: '',
    value: '',
    percent: '',
    company: '',
    points: '',
    icon: '',
  },
  onPress: () => {},
};

export { WatchCard };
