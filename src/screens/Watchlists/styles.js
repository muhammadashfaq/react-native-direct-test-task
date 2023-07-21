import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
});

export default styles;
