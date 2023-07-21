import { View, Text } from 'react-native';
import React from 'react';
import { MarketHeader } from '../../components';
import styles from './styles';
import MarketTopTab from '../../navigation/TopTabBars/MarketTopTab';

function Market() {
  return (
    <View style={styles.main}>
      <MarketHeader title="Markets"/>
      <MarketTopTab />
    </View>
  );
}

export default Market;
