import { View, Text, Pressable, Image, StyleSheet, Platform } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import MealDetails from '../MealDetails'


const MealItem = ({ id, title, imageUrl, duration, complexity, affordability}) => {
  const navigation = useNavigation();

  function selectMealItemHandler() {
    navigation.navigate('MealDetail', {
      mealId: id,
   }); 
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
          android_ripple={{ color: '#ccc' }} 
          style= { ({pressed}) => [styles.button, pressed ? styles.buttonPressed : null ]}
          onPress={selectMealItemHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source = {{ uri: imageUrl }} style={styles.image}/>
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            affordability={affordability}
            complexity={complexity}
          />
        </View>
      </Pressable>
    </View>
  )
}

export default MealItem;

const styles = StyleSheet.create({

  mealItem: {
    margin: 16,
    borderRadius : 8,
    backgroundColor: 'white',
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },

  image: {
    width: '100%',
    height: 200,
  },

  innerContainer: {
    borderRadius: 8,    
    overflow: 'hidden'
  },

  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18, 
    margin: 8
  },

  buttonPressed: {
    opacity: 0.5,
  },

});