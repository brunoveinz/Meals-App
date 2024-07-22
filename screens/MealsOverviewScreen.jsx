import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, {useEffect, useLayoutEffect} from 'react'
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItem from '../components/MealsList/MealItem';
import MealsList from '../components/MealsList/MealsList';

const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter( (meal) => {
      return meal.categoryIds.indexOf(catId) >= 0;
  });

  // is the same that useEffect but adding a efect to component at fully complete
  useLayoutEffect(() => {    
    const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;
  
    navigation.setOptions({
      title: categoryTitle,
    });
  
  },[catId, navigation]);

  return <MealsList items={displayedMeals}/>
}

export default MealsOverviewScreen

