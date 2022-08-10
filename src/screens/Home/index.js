import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, Image, SafeAreaView, StatusBar, View} from 'react-native';
import PokemonItem from '../../components/PokemonItem';
import styles from './styles';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [pokemons, setPokemons] = useState([]);

  const fetchData = async () => {
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await resp.json();
    setPokemons(data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOnItemPress = item => {
    navigation.navigate('Details', {item});
  };

  const renderItem = ({item, index}) => (
    <PokemonItem item={item} index={index} onPress={handleOnItemPress} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Image style={styles.logo} source={require('../../assets/logo.png')} />
      <View style={styles.containerList}>
        <FlatList style={styles.list} data={pokemons} renderItem={renderItem} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
