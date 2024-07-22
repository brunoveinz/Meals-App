import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealsDetail from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer'
import FavoriteScreen from './screens/FavoriteScreen';
import {Ionicons} from '@expo/vector-icons'
import FavoritesContextProvider from './store/context/favorites-contex';
import { Provider } from 'react-redux';
import { store } from './store/redux/store'



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return  (
    <Drawer.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#351401'  },
      headerTintColor: 'white',
      contentStyle: { backgroundColor: '#5f5149' },
      sceneContainerStyle: {backgroundColor:'#351401'},
      drawerContentStyle: {backgroundColor: '#351401'},
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: '#351401',
      drawerActiveBackgroundColor: '#e4baa1'
    }}>
      <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
        title: 'All Categories',
        drawerIcon: ({color, size}) => <Ionicons name='list' color={color} size={size}/>
      }}/>
      <Drawer.Screen name="Favorites" component={FavoriteScreen} options={{
        title: 'Favorites',
        drawerIcon: ({color, size}) => <Ionicons name='star' color={color} size={size}/>
      }}/>
    </Drawer.Navigator>
  )
};

export default function App() {
  return (
    <>
      <StatusBar style='light'/>
          <Provider store={store}>          
            <NavigationContainer>
              <Stack.Navigator initialRouteName='MealsCategories' screenOptions={{
                  headerStyle: { backgroundColor: '#351401'  },
                  headerTintColor: 'white',
                  contentStyle: { backgroundColor: '#5f5149' }
              }}>
                <Stack.Screen name="Drawer"component={DrawerNavigator} options={{ 
                  headerShown: false
                }}/>
                <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
                <Stack.Screen name='MealDetail'component={MealsDetail} options={{
                  title: 'About the Meal',
                  headerBackTitle: 'back'
                }} />
              </Stack.Navigator>
            </NavigationContainer>
          </Provider>

    </>
  );
}
