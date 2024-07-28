import { FlatList,View,Text,Dimensions,Image } from "react-native";
import { serverURL } from "../../services/FetchNodeServices";
var {width,height}=Dimensions.get('window')



export default function BrandComponent({data,title})
{
  const BrandView=({item})=>{

    return(
    <View style={{alignItems:'center',justifyContent:'center'}}>
    <View style={{alignItems:'center',justifyContent:'center', height:height*0.1,width:width*0.2}}>
       
     <Image style={{width:width*0.3, height:height*0.1,resizeMode:'contain'}}  source={{uri:`${serverURL}/images/${item.logo}`}} />

    </View>
    <Text style={{color:'#fff',fontSize:12}}>{item.brandname}</Text>
    </View>
    )

  }

    return(<View style={{marginTop:30}}>
      <View style={{marginLeft:12}}><Text style={{ fontSize:16, fontWeight:'bold',color:'#fff'}}>{title}</Text></View>
        <FlatList 
         data={data}
         horizontal
         renderItem={(item)=><BrandView item={item.item}/>}
         keyExtractor={item => item.brandid}
       />
    </View>)
}
