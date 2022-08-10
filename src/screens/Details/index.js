import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';

const DetailsScreen = ({route}) => {
  const navigation = useNavigation();
  const [pokemon, setPokemon] = useState();

  const fetchData = useCallback(async () => {
    const {item} = route.params;
    const resp = await fetch(item.url);
    const data = await resp.json();
    setPokemon(data);
  }, [route.params]);

  const handleOnBackPress = () => {
    navigation.goBack();
  };

  const capitalizeName = name => {
    if (!name || name.length === 0) {
      return '';
    }
    return `${name[0].toUpperCase()}${name.slice(1)}`;
  };

  const renderTypeItem = ({item}) => (
    <View style={styles.typeBadge}>
      <Text style={styles.typeLabel}>{item?.type?.name}</Text>
    </View>
  );

  const renderStatusItem = ({item}) => {
    console.log('item', item);
    return (
      <View style={styles.statusLine}>
        <Text style={styles.statusLabel}>{item?.stat.name}</Text>
        <Text style={styles.statusValue}>{item?.base_stat}</Text>
      </View>
    );
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButtonContainer}
          onPress={handleOnBackPress}>
          <Image
            source={require('../../assets/back.png')}
            style={styles.backButton}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Detalhes</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.name}>{capitalizeName(pokemon?.name)}</Text>
          <Text style={styles.name}>#{pokemon?.id}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: pokemon?.sprites.other['official-artwork'].front_default,
            }}
            resizeMode="cover"
          />
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Altura: {pokemon?.height}</Text>
            <Text style={styles.infoText}>Peso: {pokemon?.weight}</Text>
            <Text style={styles.infoText}>XP: {pokemon?.base_experience}</Text>
          </View>
        </View>
        <View style={styles.typeContainer}>
          <FlatList
            style={styles.typeList}
            data={pokemon?.types}
            horizontal
            renderItem={renderTypeItem}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.statusContainer}>
          <Text style={styles.statusTitle}>Status</Text>
          <FlatList
            style={styles.statusList}
            data={pokemon?.stats}
            renderItem={renderStatusItem}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;
