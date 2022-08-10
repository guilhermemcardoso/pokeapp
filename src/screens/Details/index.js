import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Button, Image, SafeAreaView, StatusBar, Text} from 'react-native';
import styles from './styles';

const DetailsScreen = () => {
  const navigation = useNavigation();
  const [pokemon, setPokemon] = useState();

  const fetchData = async () => {
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await resp.json();
    setPokemon(data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Image style={styles.logo} />
      <Text>Details here</Text>
      <Button onPress={() => navigation.goBack()} title="Voltar" />
    </SafeAreaView>
  );
};

export default DetailsScreen;
