import {TouchableOpacity,Alert, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import MyButton from '../component/uicomponents/MyButton';
import TextBox from '../component/uicomponents/TextBox';
import OTPInput from '../component/uicomponents/OTPInput';
 
import {useNavigation} from '@react-navigation/native';

export default function LoginOtp({route}) {
  var navigation = useNavigation();
  const { mobileno,myotp} = route.params

  const [otp, setOTP] = useState('');
  
  
  
  const handleChangeOTP = otp => {
    setOTP(otp);
  };

  const handleVerfiyOtp = async () => {
    
    if (myotp == otp) {
      navigation.navigate('logindetails',{mobileno})
    } else {
      Alert.alert('invalid otp');
    }
  };

  const handleChange = () => {
    navigation.navigate('loginscreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.main_container}>
        <Text style={styles.header}>Verfiy Phone Number</Text>
        <Text style={styles.tagLine}>An SMS with 4-digit OTP was sent to</Text>
        <View style={styles.mob_box}>
          <Text style={{ color:'#ffff',fontWeight: 'bold', fontSize: 16}}>
            +91-{mobileno}
          </Text>
          <TouchableOpacity>
            <Text
              style={{color: '#5fa0f4', fontSize: 16}}
              onPress={handleChange}>
              CHANGE
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.otp_box}>
          <OTPInput length={4} onChangeOTP={handleChangeOTP} />
        </View>
        <View style={styles.btn_box}>
          <MyButton
            w={0.85}
            h={0.07}
            bg={'#1565c0'}
            msg={'VERIFY'}
            bradius={15}
            onPress={handleVerfiyOtp}
          />
        </View>
        <Text style={{fontSize: 12, color:'#fff', paddingHorizontal: 3}}>
          By Continuing, you agree to our{' '}
          <Text style={{color: '#5fa0f4', fontSize: 10}}>Terms Of Service</Text>{' '}
          and <Text style={{color: '#5fa0f4'}}> Privacy & Legal Policy</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main_container: {
    width: 320,
    height: 550,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 27,
    fontWeight: 'bold',
    paddingBottom: 15,
    color: 'white',
  },
  tagLine: {
    // color: '#3f403f',
    fontSize: 13,
    // fontWeight:'600'
  },
  inp_box: {
    marginTop: 40,
  },
  btn_box: {
    marginTop: 50,
    marginBottom: 20,
    // marginBottom:"auto"
  },
  mob_box: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
    fontSize: 300,
  },
  otp_box: {
    marginTop: 30,
  },
});
