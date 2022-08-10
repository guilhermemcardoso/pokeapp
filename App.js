import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';

const App = () => {
  const [pokemons, setPokemons] = useState([]);

  const fetchData = async () => {
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await resp.json();
    setPokemons(data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        {pokemons.map(pokemon => {
          return <Text>{pokemon.name}</Text>;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
