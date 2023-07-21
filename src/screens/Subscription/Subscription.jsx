import React, {useState} from 'react';
import {SafeAreaView, FlatList, View, ScrollView} from 'react-native';
import styles from './styles';
import {
  Descriptors, Header, PlansCard, AppButton,
} from '../../components';
import { plans } from '../../utilities';
import { FinanceModal } from '../../components/Modal/FinanceModal';

function Subscription({ params }) {
  const [plan, setPlan] = useState(plans);
  const [openModal, setOpenModal] = useState(false);
  const renderItem = ({ item }) => (
    <PlansCard item={item} onPress={() => changeSelection(item)} />
  );

  const changeSelection = (item) => {
    setPlan(
      plan.map((obj) => (item?.id === obj?.id
        ? { ...obj, selected: true }
        : { ...obj, selected: false })),
    );
  };

  return (
    <SafeAreaView style={styles.main}>
      <Header title={'Subscription'} />
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <Descriptors
          header="Choose your plan"
          subHeader={
            'We have compared the plans to make it easier\nfor you to choose'
          }
        />
        <View>
          <FlatList
            data={plan}
            keyExtractors={(item, index) => item + index.toString}
            renderItem={renderItem}
            horizontal
            contentContainerStyle={styles.contentContainer}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <AppButton
          title="Subscribe"
          containerStyle={styles.containerStyle}
          onPress={() => setOpenModal(true)}
        />
      </ScrollView>
      <FinanceModal
        isModalVisible={openModal}
        onPress={() => setOpenModal(false)}
      />
    </SafeAreaView>
  );
}

export default Subscription;
