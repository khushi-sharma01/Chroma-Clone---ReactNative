import { View,Text,ScrollView } from "react-native";
import {useSelector} from "react-redux";
import {useState} from 'react';
import AddToCart from "../component/uicomponents/AddToCart";
import PriceDetails from "../component/uicomponents/PriceDetails";


export default function Cart(){
    var products = useSelector(state=>state.mycart)
    var keys = Object.keys(products)
    // console.log("CART PRODUCT: ",products.length)
    const [pageRefresh,setPageRefresh]=useState(false)


    return(
    <View style={{padding:15}}>
        
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{color:'#000',marginBottom:10,fontSize:18,fontWeight:'800'}}>YOUR CART</Text>
            <Text style={{color:'#000',marginBottom:10,fontSize:18,fontWeight:'800'}}>ITEMS: {keys.length}</Text>
        </View>
        
        <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:20}}>
            <AddToCart pageRefresh={pageRefresh} setPageRefresh={setPageRefresh} products={products} />
            <PriceDetails pageRefresh={pageRefresh} setPageRefresh={setPageRefresh} />
        </ScrollView>

        
        
    </View>
    )
}