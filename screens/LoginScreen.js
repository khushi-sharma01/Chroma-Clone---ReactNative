import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import MyButton from '../component/uicomponents/MyButton';
import TextBox from '../component/uicomponents/TextBox';
import {postData} from '../services/FetchNodeServices';
import {useNavigation} from '@react-navigation/native';

export default function LoginScreen() {
  var navigation = useNavigation();
  const [mobileno, setMobileno] = useState('');
  const [error, setError] = useState(false);

  const handleMobileNo = txt => {
    setMobileno(txt);
    setError(false);
  };

  const generateOTP = () => {
    var myotp = parseInt(Math.random() * 8999) + 1000;
    console.log(myotp);
    return myotp;
  };
  const handleCheckUser = async () => {
    console.log(mobileno, 'MobileNO.');

    var submit = true;
    if (mobileno.length === 0) {
      setError(true);
      submit = false;
    }
    if (submit) {
      var result = await postData('useraccount/check_account', {mobileno});
      console.log(result.message);
      if (result.status) {
        // console.log(userData)
        navigation.navigate('logindetails', {
          userData: result.data,
          flag: 'true',
          mobileno,
        });
      } else {
        var myotp = generateOTP();
        navigation.navigate('loginotp', {mobileno, myotp});
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.main_container}>
        <Text style={styles.header}>Sign in To Croma</Text>
        <Text style={styles.tagLine}>
          to acccess your Addresses, Orders & Whislist
        </Text>

        <View style={styles.inp_box}>
          <TextBox
            bg={'#363535'}
            msg={'Enter Your Mobile No.'}
            helperText={'Please enter a valid mobile number.'}
            bradius={10}
            onChangeText={txt => handleMobileNo(txt)}
            value={mobileno}
            type={'numeric'}
            error={error}
            // icon ={'phone'}
            placeholderClr="#525252"
            borClr="#3f403f"
            onfocClr="white"
            pl={10}
            icon={'mobile1'}
            Iconclr="#525252"
          />
        </View>
        <View style={styles.btn_box}>
          <MyButton
            h={0.07}
            w={0.9}
            bg={'#1565c0'}
            msg={'Sign In'}
            bradius={10}
            onPress={handleCheckUser}
          />
        </View>
        <Text style={{fontSize: 12}}>
          <Text style={{color: 'white'}}>By Continuing, you agree to our</Text>
          <Text style={{color: '#5fa0f4', fontSize: 10}}>
            Terms Of Service{' '}
          </Text>
          <Text style={{color: '#fff'}}>and</Text>
          <Text style={{color: '#5fa0f4'}}> Privacy & Legal Policy</Text>
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
    color: 'grey',
    fontSize: 15,
  },
  inp_box: {
    marginTop: 40,
  },
  btn_box: {
    marginTop: 30,
    marginBottom: 20,
    // marginBottom:"auto"
  },
});
