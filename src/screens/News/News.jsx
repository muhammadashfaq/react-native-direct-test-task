import React, {useEffect} from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import styles from './styles';
import {fetchItemsStart} from '../../redux/items/itemsSlice';
import {useSelector, useDispatch} from 'react-redux';

function News() {
  const dispatch = useDispatch();
  const {items, loading, error} = useSelector(state => state.items);

  useEffect(() => {
    dispatch(fetchItemsStart());
  }, [dispatch]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }
  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.h1}>Mock Functinality</Text>
      <View style={styles.list}>
        {items.map(item => (
          <Text key={item.id}>{item.name}</Text>
        ))}
      </View>
    </SafeAreaView>
  );
}

export default News;
