import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { MEALS } from '../dummy-data/data';
import MealDetail from '../components/MealDetail';
import { useLayoutEffect } from 'react';
import IconButton from '../components/IconButton';

const MealDetailsScreen = ({route,navigation}) => {
  const mealId = route?.params?.mealId;
  const selectMeal = MEALS.find(item=> item?.id === mealId);
function handlePress(){

}
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerRight:()=>{
        return (
          <IconButton icon="star" color="white" onPress={handlePress}/>
        )
      }
    })
  },[navigation,handlePress])

  return (
    <ScrollView style={styles.container}>
      <View>
      <Image style={styles.image} source={{uri:selectMeal?.imageUrl}} />
      <Text style={styles.title}>{selectMeal?.title}</Text>
      <MealDetail duration={selectMeal?.duration} complexity={selectMeal?.complexity} affordability={selectMeal?.affordability} textStyle={styles.detailText}/>
      </View>
        <View style={styles.outerStyle}>
      <View style={styles.listItems}>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>Ingredients</Text>
        </View>
          
            {selectMeal?.ingredients?.length > 0 && selectMeal?.ingredients?.map((item,index)=>{
              return (
                <View style={styles.listItem} key={`${item}-${index}`}>
                <Text style={styles.itemText}>{item}</Text>
              </View>
              )
            })}
          </View>
        
      </View>
        <View style={styles.outerStyle}>
      <View style={styles.listItems}>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>Steps</Text>
        </View>
        
            {selectMeal?.steps?.length > 0 && selectMeal?.steps?.map((item,index)=>{
              return (
                <View style={styles.listItem} key={`${item}-${index}`}>
                  <Text style={styles.itemText}>{item}</Text>
                </View>
              )
            })}
        
      </View>
    </View>
        
    </ScrollView>
  )
}

export default MealDetailsScreen;
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  image:{
    width:'100%',
    height:350
  },
  title:{
    fontWeight:'bold',
    fontSize:24,
    margin:8,
    textAlign:'center',
    color:"white"
  },
  detailText:{
    color:'white'
  },
  subTitle:{
    color:'#e2b497',
    fontWeight:'bold',
    fontSize:18,
    textAlign:'center',
    
  },
  subTitleContainer:{
    padding:6,
    marginHorizontal:12,
    marginVertical:4,
    borderBottomColor:'#e2b497',
    borderBottomWidth:2
  },
  outerStyle:{
    alignItems:'center'

  },
  listItems:{
    maxWidth:'80%',
  },
  
  listItem:{
    borderRadius:6,
    paddingHorizontal:8,
    paddingVertical:4,
    marginVertical:4,
    marginHorizontal:12,
    backgroundColor:'#e2b497',  
  
  },
  itemText:{
    color:'#351401',
    textAlign:'center'
  }
})