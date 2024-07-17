import { View, Text, Image } from 'react-native'
import React, {useEffect} from 'react'

import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';

const MealDetailScreen = ({ route }) => {

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find( (meal) => meal.id === mealId )

  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl}}/>
      <Text>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <View>

      </View>
      <Text>Ingredients</Text>
      {selectedMeal.ingredients.map((ingridient) => 
        (<Text key={ingridient}>{ingridient}</Text>          
      ))}

      <Text>Steps</Text>
      {selectedMeal.steps.map((steap) => 
        (<Text key={steap}>{steap}</Text>          
      ))}

    </View>
  )
}

export default MealDetailScreen