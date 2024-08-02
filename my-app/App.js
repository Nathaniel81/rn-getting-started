// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header';
import React from 'react';

export default function App() {
  const [items, setItems] = React.useState([
    {id: 1, text: 'Milk'},
    {id: 2, text: 'Soda'},
    {id: 3, text: 'Bread'},
    {id: 4, text: 'Egg'},
    {id: 5, text: 'Juice'},
  ])
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={items}
        renderItem={({ item }) => <Text style={styles.text}>{item.text}</Text>}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 30,
    color: 'blue'
  },
  list: {
  }
});
