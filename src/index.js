import React, {useEffect, useState} from 'react';
import {
  FlatList,
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

  const renderItem = ({item, index}) => (
    <View key={item.name} style={styles.item}>
      <Text style={styles.text}>
        {index + 1} {item.name}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Image style={styles.logo} source={require('./assets/logo.png')} />
      <FlatList style={styles.list} data={pokemons} renderItem={renderItem} />
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
