import { StyleSheet } from 'react-native';
import { colors, size } from '../../utilities';

const styles = StyleSheet.create({
  main: {
    backgroundColor: colors.white,
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 16,
    width: 200,
  },
  iconStyle: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    tintColor: colors.blue,
    marginHorizontal: 6,
  },
  iconStyl: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
    tintColor: colors.blue,
    marginHorizontal: 6,
  },
  arrowStyle: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
    tintColor: colors.g4,
    marginHorizontal: 6,
    transform: [{ rotate: '-90deg' }],
  },
  headerText: {
    color: colors.blue,
    fontSize: size.large,
    fontWeight: '400',
  },
  subheaderText: {
    color: colors.blue,
    fontSize: size.small,
    fontWeight: '400',
  },
  headView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  buttonStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  buttonBrdrStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.blue,
    borderRadius: 10,
    width: '95%',
  },
  subView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  claimText: {
    color: colors.g4,
    fontSize: size.normal,
    fontWeight: '500',
  },
  symbolText: {
    color: colors.blue,
    fontSize: size.normal,
    fontWeight: '500',
  },
  buttonsView: {
    position: 'absolute',
    bottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

export default styles;
