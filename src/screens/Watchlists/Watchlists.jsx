import React, { useEffect } from 'react';
import {
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useGetMoviesQuery } from '../../api/moviesApi';
import styles from './styles';
import { appIcons, colors, watchlist } from '../../utilities';
import { MarketHeader } from '../../components';
import { WatchCard } from '../../components/Cards/WatchCard';

function Header() {
  return (
    <View style={styles.headView}>
      <View style={styles.subView}>
        <Image source={appIcons.edit} style={styles.iconStyle} />
        <Text style={styles.headerText}>Edit list</Text>
      </View>
      <View style={styles.subView}>
        <Text style={styles.subheaderText}>Sort by price</Text>
        <Image source={appIcons.arrow} style={styles.iconStyl} />
      </View>
    </View>
  );
}

const renderItem = ({ item, index }) => <WatchCard item={item} index={index} />;

function Watchlists() {
  return (
    <View style={styles.main}>
      <MarketHeader title="Watchlist" />
      <Header />
      <View>
        <FlatList
          data={watchlist}
          numColumns={2}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={(item, index) => item + index.toString()}
        />
      </View>
      <View style={styles.buttonsView}>
        <TouchableOpacity style={styles.buttonBrdrStyle}>
          <Image source={appIcons.add} style={styles.iconStyle} />
          <Text style={styles.symbolText}>Add Symbol</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.claimText}>Data disclaimer</Text>
          <Image source={appIcons.arrow} style={styles.arrowStyle} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Watchlists;


