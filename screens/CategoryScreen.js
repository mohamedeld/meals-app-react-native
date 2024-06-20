import React from 'react'
import { FlatList, View } from 'react-native'
import { CATEGORIES } from '../dummy-data/data'
import CategoryGridTile from '../components/CategoryGridTile'

const CategoryScreen = ({navigation}) => {
  function pressHandler(id){
    navigation.navigate("meals-overview",{
      categoryId:id
    })
  }
  return (
    <View>
      <FlatList numColumns={2} data={CATEGORIES} renderItem={(itemData=>{
        return(
          <CategoryGridTile title={itemData?.item?.title} color={itemData?.item?.color} onPress={()=>pressHandler(itemData?.item?.id)}/>
        )
      })}  
      keyExtractor={(item)=> item?.id} />
    </View>
  )
}

export default CategoryScreen