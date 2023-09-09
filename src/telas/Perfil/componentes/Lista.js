import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

const DATA = [
    {
      id: 1,
      title: 'Primeiro Item',
    },
    {
      id: 2,
      title: 'Segundo Item',
    },
    {
      id: 4,
      title: 'Quarto Item',
    },
    {
      id: 5,
      title: 'Quinto Item',
    },
    {
      id: 6,
      title: 'Sexto Item',
    },
    {
      id: 7,
      title: 'Sétimo Item',
    },
    {
      id: 8,
      title: 'Oitavo Item',
    },
    {
      id: 9,
      title: 'Nono Item',
    },
    {
      id: 10,
      title: 'Décimo Item',
    },
    {
      id: 11,
      title: 'Décimo primeiro Item',
    },
    {
      id: 12,
      title: 'Décimo segundo Item',
    },
  ];

const Lista = () => {

const ListItem = ({ title }) => (
    <View>
        <Text>{title}</Text>
    </View>
);

  return (
    <View>
    <FlatList
        data={DATA}
        renderItem={({item}) => <ListItem title={item.title} />}
        keyExtractor={item => item.id}
    />
    </View>
  )
}

export default Lista

const styles = StyleSheet.create({})