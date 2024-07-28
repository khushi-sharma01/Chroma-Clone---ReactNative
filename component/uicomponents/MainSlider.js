 
import { Dimensions, Image, View } from 'react-native';
import { serverURL } from '../../services/FetchNodeServices';
import Carousel from 'react-native-reanimated-carousel';
const {width,height} = Dimensions.get('window');
export default function MainSlider({data}){
    var images=data?.split(',')
    //console.log("slider:",images)
    return(
        
           <View style={{height:150}}>
            <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={images}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ item }) => (
                    <View
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            justifyContent: 'center',
                            

                        }}
                    >
                    <Image style={{width:width,height:height/2,resizeMode:'contain'}} source={{uri:`${serverURL}/images/${item}`}}  />      
                    </View>
                )}
            />
        </View>
   
    )
}