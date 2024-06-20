import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native"

const MealItem = ({title,imageUrl,duration,complexity,affordability}) => {
  return (
    <View style={styles.mealItem}>
      <Pressable android_ripple={{color:'#ccc'}} style={({pressed})=> pressed && styles.ripple }>
        <View style={styles.innerContainer}>
          <View>
            <Image source={{uri:imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}m</Text>
            <Text style={styles.detailItem}>{complexity?.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability?.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  )
}

export default MealItem;
const styles = StyleSheet.create({
  mealItem:{
    margin:16,
    borderRadius:8,
    backgroundColor:'#fff',
    overflow:Platform.OS ==='android' ? 'hidden':'visible',
    elevation:4,
    shadowColor:'black',
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.25,
    shadowRadius:8
  },
  innerContainer:{
    borderRadius:8,
    overflow:'hidden'
  },
  ripple:{
    opacity:0.25
  },
  image:{
    width:'100%',
    height:200,
  },
  title:{
    fontWeight:'bold',
    textAlign:'center',
    fontSize:18,
    margin:8
  },
  details:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    padding:8,
    gap:4
  },
  detailItem:{
    fontSize:12
  }
})