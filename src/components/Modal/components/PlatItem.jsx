import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import {appIcons} from '../../../utilities';
import {styles} from '../FinanceModal';

function PlanItem({item, onExpand, isSelected, selectedValue}) {
  return (
    <>
      <TouchableOpacity onPress={() => onExpand(item)} style={styles.tabStyle}>
        <Text style={styles.headerStyle}>{item?.header}</Text>
        {!!isSelected && (
          <View style={styles.selectedView}>
            <Text style={styles.selectedText}>{selectedValue}</Text>
            <Image
              source={appIcons.arrow}
              style={[
                styles.arrowIconStyle,
                {
                  transform: [{rotate: item?.expanded ? '-180deg' : '0deg'}],
                },
              ]}
            />
          </View>
        )}
      </TouchableOpacity>

      {/* Divider component */}
    </>
  );
}

PlanItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    header: PropTypes.string.isRequired,
    selected: PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
    }),
    expanded: PropTypes.bool.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
  onExpand: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string,
};

PlanItem.defaultProps = {
  selectedValue: '',
};

export default PlanItem;
