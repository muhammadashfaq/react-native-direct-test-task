import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {colors, size} from '../../utilities';

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: colors.black,
    fontSize: size.h1,
    fontWeight: '600',
    marginTop: 30,
  },
  subHeaderText: {
    color: colors.g1,
    fontSize: size.small,
    fontWeight: '300',
    marginVertical: 10,
    textAlign: 'center',
  },
});

function Descriptors({header, subHeader}) {
  return (
    <View style={styles.main}>
      <Text style={styles.headerText}>{header}</Text>
      <Text style={styles.subHeaderText}>{subHeader}</Text>
    </View>
  );
}

Descriptors.propTypes = {
  header: PropTypes.string,
  subHeader: PropTypes.string,
};

Descriptors.defaultProps = {
  header: '',
  subHeader: '',
};

export {Descriptors};
