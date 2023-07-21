import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { colors, size } from '../../utilities';

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingVertical: 5,
    borderRadius: 10,
    marginVertical: 2.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
    width: '30%',
    shadowColor: colors.g1,
    elevation: 6,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 6,
    shadowOpacity: 0.3,
  },
  selectedContainer: {
    flexDirection: 'row',
    paddingVertical: 5,
    borderRadius: 10,
    marginVertical: 2.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
    width: '30%',
    borderWidth: 1,
    borderColor: colors.green5,
    backgroundColor: 'transparent',
  },
  textStyle: {
    color: colors.g2,
    textAlign: 'center',
    fontSize: size.normal,
    fontWeight: '400',
  },
  selectedTxt: {
    color: colors.green5,
    textAlign: 'center',
    fontSize: size.normal,
    fontWeight: '500',
  },
});

function TabButton({ item, onPress, disabled }) {
  TabButton.defaultProps = {
    item,
    onPress: () => {},
    disabled: false,
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={item?.selected ? styles.selectedContainer : styles.mainContainer}
      disabled={disabled}
    >
      <Text style={item?.selected ? styles.selectedTxt : styles.textStyle}>{item?.value}</Text>
    </TouchableOpacity>
  );
}

TabButton.propTypes = {
  item: PropTypes.objectOf(PropTypes.object),
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
};

export { TabButton };
