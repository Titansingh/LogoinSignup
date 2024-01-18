import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
//custom components
import CustomTextInput from '../../src/customTextInput';
import Button from '../../src/button';

const SignUpScreen = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    mobileNumber: '',
    age: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    username: '',
    email: '',
    mobileNumber: '',
    age: '',
    password: '',
  });

  const handleChange = (field, value) => {
    setFormData({...formData, [field]: value});
  };

  const handleSubmit = () => {
    console.log('submitted:', formData);
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.headingText}>Setup Your</Text>
        <Text style={styles.headingText}> Account</Text>
      </View>
      <ScrollView style={styles.containerMain}>
        <Text style={styles.titleText}>ACCOUNT DETAILS</Text>

        <View>
          <CustomTextInput
            handleChange={value => handleChange('name', value)}
            value={formData.name}
            errors={formErrors.name}
            placeholder={'Full Name'}
            title={'Name'}
          />
          <CustomTextInput
            handleChange={value => handleChange('username', value)}
            value={formData.username}
            errors={formErrors.username}
            placeholder={'Username'}
            title={'UserName'}
          />
          <CustomTextInput
            handleChange={value => handleChange('email', value)}
            value={formData.email}
            errors={formErrors.email}
            placeholder={'Email'}
            title={'Email'}
          />
          <CustomTextInput
            handleChange={value => handleChange('mobileNumber', value)}
            value={formData.mobileNumber}
            errors={formErrors.mobileNumber}
            placeholder={'Mobile Number'}
            title={'Mobile Number'}
            keyboardType="numeric"
          />
          <CustomTextInput
            handleChange={value => handleChange('age', value)}
            value={formData.age}
            errors={formErrors.age}
            placeholder={'Age'}
            title={'Age'}
            keyboardType="numeric"
          />
          <CustomTextInput
            handleChange={value => handleChange('password', value)}
            value={formData.password}
            errors={formErrors.password}
            placeholder={'Password'}
            title={'Password'}
          />
          <View style={{alignItems: 'flex-end'}}>
            <Button text={'SignUp'} handleSubmit={handleSubmit} />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    justifyContent: 'center',
    marginLeft: 20,
  },
  containerMain: {
    flex: 0.8,
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
