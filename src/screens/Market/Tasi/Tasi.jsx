import {
  View, Text, FlatList, Image, ScrollView,
} from 'react-native';
import React, { Fragment, useState } from 'react';
import { Divider } from '@rneui/themed';
import {
  appIcons, colors, marketValues, ratioDetails, timeFilters,
} from '../../../utilities';
import styles from './styles';
import { MarketChart, RatiosCard, TabButton } from '../../../components';

function ListFooterComponent({ isDivider = true }) {
  return (
    <>
      <Text style={styles.viewText}>View all</Text>
      {isDivider && <Divider color={colors.g4} />}
    </>
  );
}

function ListHeaderComponent() {
  return (
    <View style={styles.subHeaderView}>
      <Text style={styles.subHeader}>Symbol</Text>
      <Text style={styles.subHeader2}>Pre-market%Chg</Text>
      <Text style={styles.subHeader2}>Pre-Market</Text>
    </View>
  );
}

function Tasi() {
  const [filter, setFilters] = useState(timeFilters);

  const renderItemTime = ({ item }) => <TabButton item={item} onPress={() => onTimePress(item)} />;
  const renderItemRatio = ({ item }) => <RatiosCard item={item} />;

  const renderMarketItem = ({ item }) => <MarketChart item={item} />;

  const onTimePress = (item) => {
    setFilters(
      filter.map((obj) => (obj.id === item.id ? { ...obj, selected: !obj.selected } : { ...obj, selected: false })),
    );
  };

  return (
    <View style={styles.main}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View>
          <FlatList
            data={ratioDetails}
            numColumns={2}
            showsHorizontalScrollIndicator={false}
            renderItem={renderItemRatio}
            ListFooterComponent={ListFooterComponent}
            keyExtractor={(item, index) => item + index.toString()}
          />
        </View>
        <View style={styles.headerView}>
          <Text style={styles.headText}>Top gainers</Text>
          <Image source={appIcons.push} style={styles.iconStyle} />
        </View>
        <View>
          <FlatList
            data={filter}
            numColumns={3}
            showsHorizontalScrollIndicator={false}
            renderItem={renderItemTime}
            contentContainerStyle={styles.timeContentContainer}
            keyExtractor={(item, index) => item + index.toString()}
          />
        </View>
        <View>
          <ListHeaderComponent />
          <FlatList
            data={marketValues}
            showsVerticalScrollIndicator={false}
            renderItem={renderMarketItem}
            contentContainerStyle={styles.marketContentContainer}
            style={styles.marketStyle}
            keyExtractor={(item, index) => item + index.toString()}
          />
          <ListFooterComponent isDivider={false} />
        </View>
      </ScrollView>
    </View>
  );
}

export default Tasi;
