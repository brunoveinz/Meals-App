import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import MealsList from '../components/MealsList/MealsList'
import { MEALS } from '../data/dummy-data'
import { useSelector } from 'react-redux'

const FavoriteScreen = () => {
  const favoriteMealsCtx = useSelector( (state) => state.favoriteMeals.ids )
  const favoriteMeals = MEALS.filter( meal => favoriteMealsCtx.includes(meal.id))
  

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }
  return (
    <MealsList items={favoriteMeals}/>
  )
}

export default FavoriteScreen;


const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  }
});