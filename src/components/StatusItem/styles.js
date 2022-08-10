import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  statusLabel: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    textAlign: 'right',
    marginRight: 10,
  },
  statusLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    flex: 1,
  },
  statusValue: {
    fontSize: 20,
    flex: 1,
  },
});

export default styles;
