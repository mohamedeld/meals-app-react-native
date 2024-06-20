import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoryScreen from "./CategoryScreen";
import FavouriteScreen from "./FavouriteScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
      <Drawer.Navigator screenOptions={{
        headerStyle:{backgroundColor:'#351401'},
          headerTintColor:'white',
          contentStyle:{backgroundColor:"#24180f"},
          drawerContentStyle:{backgroundColor:'#351401'},
          drawerInactiveTintColor:'white',
          drawerActiveTintColor:'#351401',
          drawerActiveBackgroundColor:'#e4baa1'
      }}>
        <Drawer.Screen name="meals-categories" component={CategoryScreen} options={{
          title:'All Categories',
          drawerIcon:({color,size})=> {
            return (
              <Ionicons name="list" color={color} size={size} />
            )
          }
        }}/>
        <Drawer.Screen name="favourites" component={FavouriteScreen} options={{
          drawerIcon:({color,size})=> {
            return (
              <Ionicons name="star" color={color} size={size} />
            )
          }
        }}/>
      </Drawer.Navigator>
  )
}

export default DrawerNavigator