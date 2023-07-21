import { StyleSheet } from 'react-native';
import { colors } from '../../utilities';

const styles = StyleSheet.create({
  main: {
    backgroundColor: colors.white,
    flex: 1,
  },
  contentContainer: {
    width: '100%',
    justifyContent: 'center',
    paddingVertical: 20,
    alignItems: 'flex-end',
  },
  containerStyle: {
    width: '92%',
    alignSelf: 'center',
    marginTop: 10,
  },
  scrollContainer: {
    flex: 1,
  },
});

export default styles;
