import { StyleSheet } from 'react-native';
import { colors, size } from '../../../utilities';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  iconStyle: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    tintColor: colors.g3,
  },
  timeContentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  viewText: {
    marginVertical: 20,
    color: colors.b5,
    fontSize: size.small,
    alignSelf: 'center',
    fontWeight: '500',
  },
  headText: {
    color: colors.b8,
    fontSize: size.large,
    fontWeight: '700',
  },
  marketContentContainer: {
    margin: 10,
    backgroundColor: colors.white,
    shadowColor: colors.g1,
    elevation: 6,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 6,
    shadowOpacity: 0.4,
    borderRadius: 10,
  },
  marketStyle: {
    width: '100%',
  },
  subHeader: {
    color: colors.b6,
    fontSize: size.tiny,
    fontWeight: '500',
    width: '45%',
  },
  subHeader2: {
    color: colors.b6,
    fontSize: size.tiny,
    fontWeight: '500',
    width: '28%',
    alignItems: 'center',
  },
  subHeaderView: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 20,
  },
});

export default styles;
