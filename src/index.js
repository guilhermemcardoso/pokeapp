import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
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
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Image style={styles.logo} source={require('./assets/logo.png')} />
      <ScrollView style={styles.list}>
        {pokemons.map((pokemon, index) => {
          return (
            <View key={pokemon.name} style={styles.item}>
              <Text style={styles.text}>
                {index + 1} {pokemon.name}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    flex: 1,
  },
  item: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
    borderColor: '#000',
    borderWidth: 1,
  },
  list: {
    flex: 1,
    alignSelf: 'stretch',
  },
  logo: {
    margin: 30,
  },
  text: {
    fontSize: 18,
  },
});

export default App;
