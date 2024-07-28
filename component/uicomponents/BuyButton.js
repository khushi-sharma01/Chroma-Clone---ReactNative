import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Feather"
const {width, height} = Dimensions.get('window');
export default function BuyButton({
  msg,
  w ,
  h,
  bg = 'green',
  onPress = () => {},
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          marginTop: 10,
          width: width * w,
          height:height * h,
          backgroundColor: bg,
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection:'row'
        }}>
          
        <Text style={{marginRight:5,fontSize: 15,fontWeight:'bold', color: '#fff'}}>
          {msg}
        </Text>
        <Icon name='shopping-cart' size={16} style={{color:'#fff'}} />
      </View>
    </TouchableOpacity>
  );
}
