import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/AntDesign';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  title: {
    fontWeight: '500',
    fontSize: 17,
  },
});

function Header({title}) {
  return (
    <View style={styles.container}>
      <Icon name="arrowleft" size={24} color="black" />
      <Text style={styles.title}>{title}</Text>
      <Text />
    </View>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: '',
};

export {Header};
