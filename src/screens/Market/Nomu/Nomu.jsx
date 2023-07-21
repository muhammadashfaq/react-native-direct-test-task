import React, {useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  View,
  Image,
} from 'react-native';
import {useGetMoviesQuery} from '../../../api/moviesApi';
import styles from './styles';
import {colors} from '../../../utilities';

function Nomu() {
  const {
    data: movies,
    isLoading,
    isFetching,
    refetch,
    error,
  } = useGetMoviesQuery();

  useEffect(() => {
    refetch(); // Fetch the initial data
  }, [refetch]);

  const handleRefresh = () => {
    refetch(); // Fetch the updated data
  };

  const renderFooter = () => {
    if (isFetching) {
      return <ActivityIndicator size="large" />;
    }
    return null;
  };

  const renderItem = ({item}) => (
    <View style={{padding: 0}}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          {item.url ? (
            <Image style={styles.image} source={{uri: item.url}} />
          ) : null}
        </View>
        <Text style={styles.title}>{item?.title}</Text>
      </View>
    </View>
  );

  useEffect(() => {
    console.log('[movies]', movies);
    console.log('[error]', error);
  }, [movies]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={item => String(item.id)}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
        refreshing={isLoading}
        onRefresh={handleRefresh}
      />
    </SafeAreaView>
  );
}

export default Nomu;