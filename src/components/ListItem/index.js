import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const ListItem = ({item, index, onPress}) => {
  const handleOnPress = () => {
    onPress(item);
  };

  return (
    <TouchableOpacity
      onPress={handleOnPress}
      key={item.name}
      style={styles.item}>
      <Text style={styles.text}>
        {index + 1} {item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default ListItem;
