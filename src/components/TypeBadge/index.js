import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const TypeBadge = ({item}) => {
  return (
    <View style={styles.typeBadge}>
      <Text style={styles.typeLabel}>{item?.type?.name}</Text>
    </View>
  );
};

export default TypeBadge;
