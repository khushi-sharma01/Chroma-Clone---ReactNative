import {StyleSheet, Text, View, Alert, TouchableOpacity} from 'react-native';
import React from 'react';
import MyButton from '../component/uicomponents/MyButton';
import TextBox from '../component/uicomponents/TextBox';
import LoginOtp from './LoginOtp';
import {useState, useEffect} from 'react';
import {postData} from '../services/FetchNodeServices';

import {useNavigation} from '@react-navigation/native';
import { storeDatasync } from '../storage/AsyncDataStorage';
const LoginDetails = ({route}) => {
  var navigation = useNavigation();
  const {mobileno} = route.params;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
   
  const [otp, setOtp] = useState(0);
  const [errorFirst, setErrorFirst] = useState(false);
  const [errorLast, setErrorLast] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);

  const generateOTP = () => {

    var myotp = parseInt(Math.random() * 8999) + 1000;
    console.log(myotp);
    setOtp(myotp);
  };

  const handleFirstNameChange = text => {
    setFirstName(text);
    setErrorFirst(false);
  };
  const handleLasttNameChange = text => {
    setLastName(text);
    setErrorLast(false);
  };

  const handleEmailChange = text => {
    setEmail(text);
    setErrorEmail(false);
  };
  const handleSubmitUserInfo = async () => {
    console.log(firstName, 'FIRST');
    console.log(lastName, 'last');
    console.log(email, 'email');
    
    var submit = true;
    if (firstName.length === 0) {
      setErrorFirst(true);
      submit = false;
    }
    if (lastName.length === 0) {
      setErrorLast(true);
      submit = false;
    }
    if (email.length === 0) {
      setErrorEmail(true);
      submit = false;
    }
    if (submit) {
      var body={
        emailid: email,
        username: firstName +" "+ lastName,
        mobileno,
        address: 'Gwalior',
        pincode: '454001',
      }
      var result = await postData('useraccount/submit_useraccount',body );
      console.log(result.message);
      if (result.status) {
        await storeDatasync(mobileno,JSON.stringify(body))
        
        navigation.navigate('cart')
      } else {
        console.log(result.message);
      }
    }
  };

  

  const handleLogIn = () => {
    navigation.navigate('loginscreen');
  };

  return( 
    <View style={styles.container}>
      <View style={styles.main_container}>
        <Text style={styles.header}>Create New Account</Text>
        <Text style={styles.tagLine}>Please Fill In The Form To Continue</Text>
        <View style={styles.inp_box}>
          <TextBox
            bg={'#363535'}
            msg={'Enter Your First Name'}
            helperText={'Please Enter Your First Name.'}
            type={'text'}
            bradius={15}
            w={0.85}
            onChangeText={txt => handleFirstNameChange(txt)}
            value={firstName}
            error={errorFirst}
            placeholderClr="#525252"
            borClr="#3f403f"
            onfocClr="white"
            pl={10}
            icon={'user'}
            Iconclr="#525252"
          />
          <TextBox
            bg={'#363535'}
            msg={'Enter Your Last Name'}
            helperText={'Please Enter Your Last Name.'}
            type={'text'}
            bradius={15}
            w={0.85}
            onChangeText={txt => handleLasttNameChange(txt)}
            value={lastName}
            error={errorLast}
            placeholderClr="#525252"
            borClr="#3f403f"
            onfocClr="white"
            pl={10}
            icon={'user'}
            Iconclr="#525252"
          />
          <TextBox
            bg={'#363535'}
            msg={'Enter Your Email Address'}
            helperText={'Please Enter Valid Email Address.'}
            type={'text'}
            bradius={15}
            w={0.85}
            onChangeText={txt => handleEmailChange(txt)}
            value={email}
            error={errorEmail}
            placeholderClr="#525252"
            borClr="#3f403f"
            onfocClr="white"
            pl={10}
            icon={'mail'}
            Iconclr="#525252"
          />
        </View>
        {/* <LoginOtp/> */}

        <View style={styles.btn_box}>
          <MyButton
            h={0.07}
            w={0.85}
            bg={'#1565c0'}
            msg={'Sign In'}
            bradius={15}
            onPress={handleSubmitUserInfo}
          />
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity onPress={handleLogIn}>
            <Text style={{color: '#fff', fontSize: 12}}>
              Have An Account?
              <Text style={{color: '#5fa0f4', fontSize: 12}}> Log In</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginDetails;

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
    color: '#3f403f',
    fontSize: 15,
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
});
