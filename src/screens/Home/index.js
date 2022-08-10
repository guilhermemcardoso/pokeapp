import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, Image, SafeAreaView, StatusBar, View} from 'react-native';
import Button from '../../components/Button';
import PokemonItem from '../../components/PokemonItem';
import styles from './styles';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [pokemons, setPokemons] = useState([]);
  const [previousPage, setPreviousPage] = useState();
  const [nextPage, setNextPage] = useState();
  const [offset, setOffset] = useState(0);

  const fetchData = async url => {
    const resp = await fetch(url);
    const data = await resp.json();
    setPokemons(data.results);
    setPreviousPage(data.previous);
    setNextPage(data.next);
  };

  const loadPreviousPage = () => {
    fetchData(previousPage);
    setOffset(offset - 20);
  };

  const loadNextPage = () => {
    fetchData(nextPage);
    setOffset(offset + 20);
  };

  useEffect(() => {
    fetchData('https://pokeapi.co/api/v2/pokemon');
  }, []);

  const handleOnItemPress = item => {
    navigation.navigate('Details', {item});
  };

  const renderItem = ({item, index}) => (
    <PokemonItem
      item={item}
      index={index}
      offset={offset}
      onPress={handleOnItemPress}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Image style={styles.logo} source={require('../../assets/logo.png')} />
      <View style={styles.containerList}>
        <FlatList style={styles.list} data={pokemons} renderItem={renderItem} />
      </View>
      <View style={styles.buttonContainer}>
        {previousPage && <Button label="Anterior" onPress={loadPreviousPage} />}
        {nextPage && <Button label="Próxima" onPress={loadNextPage} />}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
