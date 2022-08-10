import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {capitalizeName, formatNumber} from '../../utils';
import styles from './styles';

const PokemonItem = ({item, index, offset, onPress}) => {
  const handleOnPress = () => {
    onPress(item);
  };

  return (
    <TouchableOpacity
      onPress={handleOnPress}
      key={item.name}
      style={styles.item}>
      <Text style={styles.text}>
        #{formatNumber(offset + index + 1)} - {capitalizeName(item.name)}
      </Text>
    </TouchableOpacity>
  );
};

export default PokemonItem;
