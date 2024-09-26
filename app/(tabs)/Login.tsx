import React from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Container, Input, ErrorText, FormText,Title, MainImg, Buttonsx, ButtonText, ExtraTexts } from '@/assets/styles/login_style';
import { useFonts } from "expo-font";
import { Link } from 'expo-router';

// Validation schema
const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Password is too short - should be 6 chars minimum.')
    .required('Required'),
});

export default function LoginForm() {
  const [fontsLoaded] = useFonts({
    'britannic': require('@/assets/fonts/Britannic.ttf'),
    'space-mon': require('@/assets/fonts/SpaceMono-Regular.ttf'),
    'century': require('@/assets/fonts/century.ttf')
  });

  if (!fontsLoaded) {
    return null; // or a loading spinner
  }

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={values => {
        console.log(values);
        // Handle login logic here
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <Container>
          <MainImg source={require('@/assets/image-imports/blank_prof.png')}></MainImg>
          <Title>LOGIN</Title>

          <FormText>Email</FormText>
          <Input
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            keyboardType="email-address"
            placeholder='example@gmail.com'
            placeholderTextColor={'#949494'}
          />
          {touched.email && errors.email ? (
            <ErrorText>{errors.email}</ErrorText>
          ) : null}

          <FormText>Password</FormText>
          <Input
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            secureTextEntry
            placeholder='******'
            placeholderTextColor={"#949494"}
          />
          {touched.password && errors.password ? (
            <ErrorText>{errors.password}</ErrorText>
          ) : null}

          <Buttonsx>
            <ButtonText>LOGIN</ButtonText>
          </Buttonsx>
          <ExtraTexts>Dont Have An Account? <Link href={'/(tabs)/Signup'} style={{color: 'blue'}}>Sign Up</Link></ExtraTexts>
        </Container>
      )}
    </Formik>
  );
}

