import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const ListItem = ({item, index}) => {
  return (
    <View key={item.name} style={styles.item}>
      <Text style={styles.text}>
        {index + 1} {item.name}
      </Text>
    </View>
  );
};

export default ListItem;
