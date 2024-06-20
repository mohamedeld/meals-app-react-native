import { FlatList, StyleSheet, Text, View } from 'react-native'
import { MEALS,CATEGORIES } from '../dummy-data/data';
import MealItem from '../components/MealItem';
import { useLayoutEffect } from 'react';

const MealsScreenOverview = ({route,navigation}) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS?.filter(item=>{
    return item?.categoryIds?.indexOf(catId) >= 0;
  })
  useLayoutEffect(()=>{
    const category = CATEGORIES.find(item=> item?.id === catId);
    navigation.setOptions({
      title:category?.title
    })
  },[navigation,catId])
  function handleNavigation(id){
    navigation.navigate("meal-details",{
      mealId:id
    })
  }
  return (
    <View style={styles.container}> 
      <FlatList data={displayedMeals} renderItem={(itemData=>{
        return (
          <MealItem title={itemData?.item?.title} imageUrl={itemData?.item?.imageUrl} duration={itemData?.item?.duration} complexity={itemData?.item?.complexity} affordability={itemData?.item?.affordability} onPress={()=> handleNavigation(itemData?.item?.id)}/>
        )
      })} keyExtractor={(item)=> item?.id}/>
    </View>
  )
}

export default MealsScreenOverview;
const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:16
  }
})