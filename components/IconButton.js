import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable, StyleSheet } from 'react-native';

const IconButton = ({color,icon,onPress}) => {
  return (
    <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
      <Ionicons name={icon}size={24} color={color}/>
    </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({
  pressed:{
    opacity:0.7
  }
})