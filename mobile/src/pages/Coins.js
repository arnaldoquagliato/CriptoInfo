import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';

import Header from '../componentes/Header'

import colors from '../styles/colors';
import fonts from '../styles/fonts';

const classification = [
  {"key":"all", "label": "Todos"},
  {"key":"baixa", "label": "Em baixa"},
  {"key":"alta", "label": "Em alta"},
  {"key":"dollar", "label": "Dollar"},
]

export default function Coins({nome}){
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState>([]);
  const [selectedClassification, setSelectedClassification] = useState('all');
  const [loading, setLoading] = useState(true)
  
  const [page, setPage] = useState(1)
  const [loadingMore, setLoadingMore] = useState(false)
  const [loadingAll, setLoadingAll] = useState(false)

  // if(loading)
  //   return <Load/>
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header/>
        {/* <Text style={styles.title}>
          Sobre qual moeda
        </Text>
        <Text style={styles.subtitle}>
          voce deseja saber mais hoje?
        </Text>
      </View>
      <View>
        <FlatList 
          data={classification}
          renderItem ={({ item }) => (
            <EnviromentButton 
              title={item.label}
              active={item.key===selectedClassification}
              onPress={() => handleEnvironmentSelected(item.key)}
              />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.enviromentList}
          />  
      </View>

      <View style={styles.plants}>
      <FlatList 
          data={filteredPlants}
          renderItem ={({ item }) => (
            <PlantCardPrimary 
              data={item}
              />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd}) => 
            handleFetchMore(distanceFromEnd)
        }
        ListFooterComponent={
          loadingMore ?
          <ActivityIndicator color={colors.green} /> : nulle
        }
          />   */}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: colors.background,
    
  },
  header:{
    paddingHorizontal: 30
  },
  title:{
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15
  },
  subtitle:{
    fontFamily: fonts.text,
    fontSize: 17,
    lineHeight: 20,
    color: colors.heading
  },
  enviromentList:{
    justifyContent: 'center',
    paddingBottom: 5,
    marginLeft: 32, 
    marginVertical: 32
  },
  plants:{
    flex: 1,
    paddingHorizontal: 32,
    justifyContent:'center'
  },
  contentContainerStyle:{
    justifyContent: 'center',
  }
})