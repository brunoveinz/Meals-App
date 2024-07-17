import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, {useEffect, useLayoutEffect} from 'react'
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItem from '../components/MealItem';

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

  function renderMealItem(itemData) {
    const item = itemData.item;
    
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    }

    return <MealItem {...mealItemProps}/>
  };

  return (
    <View style={styles.container}>
      <FlatList 
        data = {displayedMeals}
        keyExtractor={ (meal) => meal.id}
        renderItem={renderMealItem}
      />
    </View>
  )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})