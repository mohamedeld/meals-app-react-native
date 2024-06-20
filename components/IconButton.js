import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable } from 'react-native';

const IconButton = ({color,icon,onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name={icon}size={24} color={color}/>
    </Pressable>
  )
}

export default IconButton