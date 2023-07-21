import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import {financialPlan} from '../../utilities/constants';
import {colors, size} from '../../utilities';
import {AppButton} from '../Button/AppButton';
import PlanItem from './components/PlatItem';
import OptionItem from './components/OptionItem';

const styles = StyleSheet.create({
  modalContainer: {
    width: '100%',
    backgroundColor: colors.white,
    flex: 0.65,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  modalStyle: {
    flex: 1,
    margin: 0,
    justifyContent: 'flex-end',
  },
  topSlider: {
    padding: 1.5,
    width: 85,
    marginVertical: 8,
    borderRadius: 5,
    backgroundColor: colors.g4,
    alignSelf: 'center',
    marginBottom: 12,
  },
  headerStyle: {
    color: colors.black,
    fontSize: size.normal,
    fontWeight: '600',
  },
  tabStyle: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    flexDirection: 'row',
  },
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
  selectedText: {
    color: colors.lightBlue,
    fontSize: size.large,
    fontWeight: '500',
    marginLeft: 6,
  },
  selectedView: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  containerStyle: {
    width: '92%',
    alignSelf: 'center',
    marginTop: 10,
    position: 'absolute',
    bottom: 50,
  },
});

function FinanceModal({isModalVisible, onPress}) {
  const [plan, setPlans] = useState(financialPlan);

  const onExpand = item => {
    setPlans(prevPlan =>
      prevPlan.map(obj =>
        obj?.id === item?.id
          ? {...obj, expanded: !obj.expanded}
          : {...obj, expanded: false},
      ),
    );
  };

  const onSelection = (item, index) => {
    setPlans(prevPlan =>
      prevPlan.map(obj =>
        obj?.id === index ? {...obj, selected: item} : {...obj},
      ),
    );
  };

  const renderItem = ({item}) => {
    console.log('[accordian item]', item);
    const object = item;
    return (
      <>
        <PlanItem
          item={object}
          onExpand={onExpand}
          isSelected={!!object.selected}
          selectedValue={object.selected?.value}
        />

        {object.expanded && (
          <View>
            <FlatList
              data={object.options}
              keyExtractor={option => option.id.toString()}
              renderItem={({item}) => (
                <OptionItem
                  item={item}
                  onSelection={onSelection}
                  isSelected={object.selected?.id === item.id}
                />
              )}
            />
          </View>
        )}
      </>
    );
  };

  return (
    <Modal
      isVisible={isModalVisible}
      onBackdropPress={onPress}
      onBackButtonPress={onPress}
      animationIn="slideInUp"
      style={styles.modalStyle}
    >
      <View style={styles.modalContainer}>
        <View style={styles.topSlider} />
        <FlatList
          data={plan}
          keyExtractor={(item, index) => item + index.toString()}
          renderItem={renderItem}
        />
        <AppButton title="Save" containerStyle={styles.containerStyle} />
      </View>
    </Modal>
  );
}

FinanceModal.propTypes = {
  isModalVisible: PropTypes.bool,
  onPress: PropTypes.func,
};

FinanceModal.defaultProps = {
  isModalVisible: false,
  onPress: () => {},
};

export {FinanceModal, styles};
