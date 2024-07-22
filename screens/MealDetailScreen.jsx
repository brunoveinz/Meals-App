import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native'
import React, {useContext, useEffect, useLayoutEffect} from 'react'

import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';
import {FavoritesContext} from '../store/context/favorites-contex'

const MealDetailScreen = ({ route, navigation }) => {

  const favoriteMealsCtx = useContext(FavoritesContext)

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find( (meal) => meal.id === mealId )

  //this method return boolean 
  const mealsIsFavorite = favoriteMealsCtx.ids.includes(mealId)

  function changeFavoriteStatusHandler() {
    if (mealsIsFavorite) {
      favoriteMealsCtx.removeFavorite(mealId)
    } else {
      favoriteMealsCtx.addFavorite(mealId)
    }
  }

  useLayoutEffect( () => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton 
            icon={mealsIsFavorite ? 'star' : 'star-outline'} 
            color='white'  
            onPress={changeFavoriteStatusHandler}
          />
        )}
    });
  },[navigation, changeFavoriteStatusHandler])


  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl}}/>
      <Text style={styles.title} >{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle title="Ingredients"/>
          <List data={selectedMeal.ingredients}/>
          <Subtitle title='Steps'/>
          <List data={selectedMeal.steps}/>
        </View>
      </View>
    </ScrollView>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({

  rootContainer: {
    marginBottom: 32,
  },

  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white'
  },
  detailText: {
    color: 'white'
  },

  listOuterContainer: {
    alignItems: "center"
  },

  listContainer: {
    width: '80%',
  },
})