import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import MealItem from './MealItem';


const MealsList = ({items}) => {
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
            data = {items}
            keyExtractor={ (meal) => meal.id}
            renderItem={renderMealItem}
            />
        </View>
    );
}

export default MealsList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})