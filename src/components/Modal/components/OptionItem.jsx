import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import {appIcons, colors, size} from '../../../utilities';

const styles = StyleSheet.create({
  iconTabStyle: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconStyle: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    tintColor: colors.black,
  },
  arrowIconStyle: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
    tintColor: colors.lightBlue,
    marginHorizontal: 6,
  },
  optnTxt: {
    color: colors.black,
    fontSize: size.normal,
    fontWeight: '300',
  },
});

function OptionItem({item, isSelected, onSelection}) {
  console.log('[item OptionItem]', item);
  return (
    <TouchableOpacity
      style={styles.iconTabStyle}
      onPress={() => onSelection(item)}
    >
      <Text style={styles.optnTxt}>{item?.value}</Text>
      {isSelected && <Image source={appIcons.tick} style={styles.iconStyle} />}
    </TouchableOpacity>
  );
}

OptionItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSelection: PropTypes.func.isRequired,
};

export default OptionItem;
