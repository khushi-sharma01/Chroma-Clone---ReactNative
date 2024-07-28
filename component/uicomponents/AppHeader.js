import React, {useState, useEffect, useSyncExternalStore} from 'react';
import {TouchableOpacity,Image, Dimensions, View,Text, Touchable} from 'react-native';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/native';
import Icon from "react-native-vector-icons/Feather"
import { useSelector } from 'react-redux';
 
const {width, height} = Dimensions.get('window');


export default function AppHeader(props) {
  var navigation = useNavigation();
  var cartItems=useSelector((state)=>state.mycart)
  var keys=Object.keys(cartItems)
 
  return (
    <View>
      <View
        style={{
          alignItems: 'center',
          backgroundColor: '#fff',
          display: 'flex',
          width: width,
          height: height * 0.06,
          justifyContent: 'space-between',
          flexDirection: 'row',
          padding: 5,
        }}>
        <MCI
          name="menu"
          size={24}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
        <Image
          style={{resizeMode: 'contain', width: 80, height: 80}}
          source={require('../../assets/logo.png')}
        />
        <TouchableOpacity onPress={()=>navigation.navigate('cart')}>
        <View style={{padding:5,position:'relative'}}>
        <View style={{position:'absolute',zIndex:3,right:-3,top:-3,justifyContent:'center',alignItems:'center', width:18,height:18,borderRadius:9,backgroundColor:'#000'}}>
        <Text style={{color:'#fff',fontWeight:'bold',fontSize:12}} >{keys.length}</Text>  
        </View>
        <Icon name="shopping-cart" size={24} />
        </View>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}


