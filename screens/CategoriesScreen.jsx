import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'

const CategoriesScreen = ({ navigation }) => {
  function renderCategoryItem(itemData){
    
    function pressHandler() {
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id,
      });
    }
    return(
      <CategoryGridTile 
        title={itemData.item.title} 
        color ={itemData.item.color} 
        onPress={pressHandler} 
      />
    );
  }

  return (
    <View>
      <FlatList         
        data={CATEGORIES}
        renderItem={renderCategoryItem}
        keyExtractor={item => item.id}
        numColumns={2} 
      />
    </View>
  )
}

export default CategoriesScreen