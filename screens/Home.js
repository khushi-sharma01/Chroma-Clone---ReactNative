import { useState,useEffect } from "react";
import { View,Text,ScrollView } from "react-native";
import SearchBar from "../component/uicomponents/SearchBar";
import SliderComponent from "../component/uicomponents/SliderComponent";
import { getData, postData, serverURL } from "../services/FetchNodeServices";
import MainSlider from "../component/uicomponents/MainSlider";
import BrandComponent from "../component/uicomponents/BrandComponent";
import Showproducts from "../component/uicomponents/ShowProducts";

export default function Home(props)
{   
  console.log("HOME PROPS:",props)
  const [category,setCategoryList]=useState([])
  const [brands,setBrandList]=useState([])
  const [banners,setBanners]=useState('')
  const [product,setProduct]=useState([])
  const fetchAllProduct=async(status)=>{
    var result=await postData('userinterface/display_all_products_by_status',{status})
    setProduct(result.data)
   
  }


  const fetchAllCategory=async()=>{
    var result=await getData('userinterface/display_all_category')
    setCategoryList(result.data)
   
  }

  const fetchAllBrands=async()=>{
    var result=await getData('userinterface/display_all_brands')
    setBrandList(result.data)
   
  }

  const fetchAllBanners=async()=>{
    var result=await getData('userinterface/fetch_all_banner')
    
    setBanners(result?.data[0]?.files)
   
  }

  useEffect(function(){fetchAllCategory()
    fetchAllBanners()
    fetchAllBrands()
    fetchAllProduct('Trending')
  },[])
  return(
  <ScrollView>
  <View style={{flex:1,backgroundColor:'#000'}}>
    <View style={{alignItems:'center'}}>
    <SearchBar />   
    </View>
    
    <View style={{flexDirection:'column'}}>
    <View>
    <SliderComponent data={category} />
    </View>
     <MainSlider data={banners}/>
     <BrandComponent data={brands} title={'Top Brands'}/>
     <Showproducts data={product} title={'Trending'} props={props} />
    </View>
    
   </View>
   </ScrollView>)
}