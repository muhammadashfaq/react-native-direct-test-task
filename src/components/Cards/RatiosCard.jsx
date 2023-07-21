import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { colors, size } from '../../utilities';

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    marginHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.white,
    padding: 10,
    width: '45%',
    shadowColor: colors.g1,
    elevation: 6,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 6,
    shadowOpacity: 0.3,
  },
  nameText: {
    color: colors.g2,
    fontWeight: '500',
    fontSize: size.small,
  },
  valueText: {
    color: colors.green5,
    fontWeight: '500',
    fontSize: size.small,
  },
});

function RatiosCard({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.main} onPress={onPress} disabled>
      <Text style={styles.nameText}>{item?.name}</Text>
      <Text style={styles.valueText}>
        +
        {item?.value}
      </Text>
      <Text style={styles.valueText}>
        +
        {item?.percent}
        %
      </Text>
    </TouchableOpacity>
  );
}

RatiosCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.number,
    percent: PropTypes.number,
  }),
  onPress: PropTypes.func,
};

RatiosCard.defaultProps = {
  item: {
    name: '',
    value: 0,
    percent: 0,
  },
  onPress: () => {},
};

export { RatiosCard };
