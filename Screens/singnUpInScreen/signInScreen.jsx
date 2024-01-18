import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import CustomTextInput from '../../src/customTextInput';
import Button from '../../src/button';

const SignInScreen = ({navigation}) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (field, value) => {
    setFormData({...formData, [field]: value});
  };

  const handleLogin = async () => {
    console.log('Login with:', formData);
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.headingText}>Welcome</Text>
        <Text style={styles.headingText}>Back</Text>
      </View>
      <ScrollView style={styles.containerMain}>
        <Text style={styles.titleText}>ACCOUNT DETAILS</Text>

        <View>
          <CustomTextInput
            handleChange={value => handleChange('username', value)}
            value={formData.username}
            placeholder={'Username'}
            title={'UserName'}
          />
          <CustomTextInput
            handleChange={value => handleChange('email', value)}
            value={formData.email}
            placeholder={'Email'}
            title={'Email'}
          />
          <CustomTextInput
            handleChange={value => handleChange('password', value)}
            value={formData.password}
            placeholder={'Password'}
            title={'Password'}
            secureTextEntry // assuming this is for password input
          />
          <View style={{alignItems: 'flex-end'}}>
            <Button text={'Login'} handleSubmit={handleLogin} />
          </View>
        </View>

        <TouchableOpacity
          style={{alignSelf: 'center'}}
          onPress={() => {
            navigation.navigate('SignUpScreen');
          }}>
          <Text style={styles.titleText}>Create Account</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    justifyContent: 'center',
    marginLeft: 20,
  },
  containerMain: {
    flex: 0.6,
    backgroundColor: '#8584F9',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  titleText: {
    marginLeft: 20,
    marginTop: 20,
    fontSize: 17,
    color: '#b7b8fb',
    fontWeight: 'bold',
  },
});
