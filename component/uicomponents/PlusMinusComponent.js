import { useState } from 'react'
import { Dimensions, Text, TouchableOpacity, View } from 'react-native'
import MyButton from './MyButton'

const { width, height } = Dimensions.get('window')

export default function PlusMinusComponent(props) {

    const [value, setValue] = useState(0)

    const handlePlus = () => {
       
        var v = value
        v = v + 1
        setValue(v)
        props.onChange(v);
    }

    const handleMinus = () => {
        var v = value
        v = v - 1
        setValue(v)
        props.onChange(v);
    }

    const Button = ({ msg, onPress }) => {
        return (
            <TouchableOpacity onPress={onPress}>
                <View style={{ width: width * 0.13, height: width * 0.13, backgroundColor: '#12daa8', borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 28, fontWeight: 500, color: '#000' }}>
                        {msg}
                    </Text>

                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{ display: 'flex' }}>
            {value === 0 ?
                <View >
                    <MyButton onPress={handlePlus} bg='#353535' msg='Add to Cart' w={0.47} h={0.08} brdCol='#fff' />
                </View> :
                <View style={{ width: width * 0.47, height: 50, marginTop: 10, paddingHorizontal: 20, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button msg='-' onPress={handleMinus} />
                    <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>{value}</Text>
                    <Button msg='+' onPress={handlePlus} />
                </View>
            }
        </View>
    )
}