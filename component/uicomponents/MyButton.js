import { View,Text,Dimensions,TouchableOpacity } from "react-native";

const{width,height}=Dimensions.get('window')
export default function MyButton({msg,w=0.9,h=0.4,fs=22,brdCol=bg,bg='green',fg='#fff',onPress=()=>{}})
{
  return(
    <TouchableOpacity onPress={onPress}>
    <View style={{borderColor:brdCol,borderWidth:1.2, marginTop:10,width:width*w,height:height*h,backgroundColor:bg,borderRadius:5,justifyContent:'center',alignItems:'center'}}>
    <Text style={{fontSize:fs,letterSpacing:1,color:fg}}>{msg}</Text>

    </View>
    </TouchableOpacity>
  )

}