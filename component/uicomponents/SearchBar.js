import TextBox from "./TextBox"
import { View } from "react-native"
export default function SearchBar(){
    return(
        <View>
          <TextBox icon="search1" w={0.96} msg="Search your products..."/>
        </View>
    )
}