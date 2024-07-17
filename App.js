import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealsDetail from './screens/MealDetailScreen';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar style='light'/>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='MealsCategories' screenOptions={{
              headerStyle: { backgroundColor: '#351401'  },
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#5f5149' }
          }}>
            <Stack.Screen 
              name="MealsCategories" 
              component={CategoriesScreen}
              options={{
                title: 'All Categories',
              }} 
            />
            <Stack.Screen 
              name="MealsOverview" 
              component={MealsOverviewScreen} 
              // options={ ({route, navigation}) => {
              //   const catId = route.params.categoryId;
              //   return {
              //     title: catId,
              //     headerBackTitle: 'back'
              //   };
              // }}
              />
              <Stack.Screen name='MealDetail' component={MealsDetail}/>
            
          </Stack.Navigator>
        </NavigationContainer>
    </>
  );
}
