import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import {colors, size} from '../../utilities';

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    backgroundColor: colors.p2,
    width: '100%',
    padding: 10,
    borderRadius: 7,
    marginVertical: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: colors.white,
    textAlign: 'center',
    fontSize: size.large,
  },
});

function AppButton({
  title,
  backgroundColor = colors.blue,
  onPress,
  containerStyle,
  titleStyle,
  loading,
  loaderColor = colors.white,
  disabled,
}) {
  AppButton.defaultProps = {
    title: 'Button',
    backgroundColor: colors.blue,
    onPress: () => {},
    containerStyle,
    titleStyle,
    loading: false,
    loaderColor: colors.white,
    disabled: false,
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.mainContainer, containerStyle, {backgroundColor}]}>
      {loading ? (
        <ActivityIndicator size="small" color={loaderColor} />
      ) : (
        <Text style={[styles.textStyle, titleStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

AppButton.propTypes = {
  title: PropTypes.string,
  backgroundColor: PropTypes.string,
  onPress: PropTypes.func,
  containerStyle: PropTypes.objectOf(PropTypes.object),
  titleStyle: PropTypes.objectOf(PropTypes.object),
  loading: PropTypes.bool,
  loaderColor: PropTypes.string,
  disabled: PropTypes.bool,
};

export {AppButton};
