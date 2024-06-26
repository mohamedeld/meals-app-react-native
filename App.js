import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsScreenOverview from './screens/MealsScreenOverview';
import MealDetailsScreen from './screens/MealDetailsScreen';
import DrawerNavigator from './screens/DrawerNavigator';
import FavouriteContextProvider from './store/context/favouriteContext';
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <StatusBar style='light'/>
      <FavouriteContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle:{backgroundColor:'#351401'},
            headerTintColor:'white',
            contentStyle:{backgroundColor:"#24180f"}
          }}>
            <Stack.Screen  name="Drawer" component={DrawerNavigator} options={{
              headerShown:false
            }}/>
            <Stack.Screen name="meals-overview" component={MealsScreenOverview} />
            <Stack.Screen name="meal-details" component={MealDetailsScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      </FavouriteContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  
});
