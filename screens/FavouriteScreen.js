import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import MealItem from '../components/MealItem'
import { useContext } from 'react'
import { FavouritesContext } from '../store/context/favouriteContext'
import { MEALS } from '../dummy-data/data'

const FavouriteScreen = ({navigation}) => {
  const favouriteCtx = useContext(FavouritesContext);
  const mealItems = MEALS?.filter(item=>favouriteCtx?.ids?.includes(item?.id))
  function handleNavigation(id){
    navigation.navigate("meal-details",{
      mealId:id
    })
  }
  return (
    <View style={styles.container}>
      <FlatList data={mealItems} renderItem={(itemData)=>{
       return (
        <MealItem title={itemData?.item?.title} imageUrl={itemData?.item?.imageUrl} duration={itemData?.item?.duration} complexity={itemData?.item?.complexity} affordability={itemData?.item?.affordability} onPress={()=> handleNavigation(itemData?.item?.id)} />
       )
      }} keyExtractor={(item)=> item?.id}/>
    </View>
  )
}

export default FavouriteScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:16
  }
})