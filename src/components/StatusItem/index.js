import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const StatusItem = ({item}) => {
  return (
    <View style={styles.statusLine}>
      <Text style={styles.statusLabel}>{item?.stat.name}</Text>
      <Text style={styles.statusValue}>{item?.base_stat}</Text>
    </View>
  );
};

export default StatusItem;
