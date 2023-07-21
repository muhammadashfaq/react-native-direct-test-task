import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import {colors, size} from '../../utilities';

const styles = StyleSheet.create({
  main: {
    flexDirection: 'column',
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: colors.g1,
    elevation: 6,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    borderColor: colors.green5,
    borderWidth: 1,
  },
  topView: {
    backgroundColor: colors.white,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 15,
    paddingHorizontal: 8,
    marginVertical: 1,
  },
  bottomView: {
    backgroundColor: colors.white,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 25,
    paddingHorizontal: 8,
    marginVertical: 1,
  },
  sandwichView: {
    backgroundColor: colors.white,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 25,
    paddingHorizontal: 8,
    marginVertical: 1,
  },
  planTypeText: {
    color: colors.black,
    fontSize: size.normal,
    fontWeight: '600',
    marginVertical: 3,
    paddingTop: 15,
  },
  priceText: {
    color: colors.green5,
    fontSize: 30,
    fontWeight: '600',
    marginVertical: 3,
  },
  headerText: {
    color: colors.g1,
    fontSize: size.xxsmall,
    fontWeight: '400',
    marginVertical: 3,
  },
  subHeaderText: {
    color: colors.black,
    fontSize: size.small,
    fontWeight: '600',
    marginVertical: 3,
  },
  popularText: {
    color: colors.white,
    fontSize: size.tiny,
    fontWeight: '600',
  },
  popularView: {
    backgroundColor: colors.green5,
    paddingVertical: 4,
    paddingHorizontal: 8,
    top: -1,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
});

function PlansCard({item, onPress}) {
  return (
    <TouchableOpacity
      style={[styles.main, {borderWidth: item?.selected ? 1 : 0}]}
      onPress={onPress}>
      <View
        style={[styles.topView, {paddingVertical: item?.selected ? 0 : 15}]}>
        {item?.selected && (
          <View style={styles.popularView}>
            <Text style={styles.popularText}>Popular plan</Text>
          </View>
        )}
        <Text style={styles.planTypeText}>{item?.planType}</Text>
        <Text style={styles.priceText}>${item?.planPrice}</Text>
      </View>
      <View style={styles.sandwichView}>
        <Text style={styles.headerText}>Payment Period</Text>
        <Text style={styles.subHeaderText}>{item?.paymentPeriod}</Text>
      </View>
      <View style={styles.sandwichView}>
        <Text style={styles.headerText}>Watchlists</Text>
        <Text style={styles.subHeaderText}>{item?.watchlist}</Text>
      </View>
      <View style={styles.sandwichView}>
        <Text style={styles.headerText}>Change the plan</Text>
        <Text style={styles.subHeaderText}>{item?.planChange}</Text>
      </View>
      <View style={styles.bottomView}>
        <Text style={styles.headerText}>Payment Period</Text>
        <Text style={styles.subHeaderText}>{item?.paymentPeriod}</Text>
      </View>
    </TouchableOpacity>
  );
}

PlansCard.propTypes = {
  item: PropTypes.shape({
    selected: PropTypes.bool,
    planType: PropTypes.string,
    planPrice: PropTypes.number,
    paymentPeriod: PropTypes.string,
    watchlist: PropTypes.string,
    planChange: PropTypes.string,
  }),
  onPress: PropTypes.func,
};

PlansCard.defaultProps = {
  item: {
    selected: false,
    planType: '',
    planPrice: 0,
    paymentPeriod: '',
    watchlist: '',
    planChange: '',
  },
  onPress: () => {},
};

export {PlansCard};
