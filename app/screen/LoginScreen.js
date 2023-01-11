import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const onSignInPress = () => {
        console.warn("Sign in");
    }
    const onForgotPsdPress = () => {
        console.warn("Forgot ?");
    }
    const onSignInPressGg = () => {
        console.warn("Sign Google");
    }
    const onSignInPressFb = () => {
        console.warn("Facebook in");
    }
    const onSignInPressIg = () => {
        console.warn("Instagram");
    }
    const onSignUpPress = () => {
        console.error("Sign up");
    }
    const { height } = useWindowDimensions();
    return (
        <View style={styles.root}>
            <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />
            <CustomInput placeholder="Username" value={username} setValue={setUsername} />
            <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry />
            <CustomButton text="Sign in" onPress={onSignInPress} />
            <CustomButton text="Forgot password" onPress={onForgotPsdPress} type="TETIARY" />
            <CustomButton text="Sign in with Facebook" onPress={onSignInPressFb} bgColor="#E7EAF4" fgColor="#4765A9" />
            <CustomButton text="Sign in with Google" onPress={onSignInPressGg} bgColor="#FAE9EA" fgColor="#DD4D44" />
            <CustomButton text="Sign in with Instagram" onPress={onSignInPressIg} bgColor="#e3e3e3" fgColor="#363636" />
            <CustomButton text="Don't have an account" onPress={onSignUpPress} type="TETIARY" />
        </View>
    );
};
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 15,
    },
    logo: {
        width: '25%',
        maxWidth: 500,
        maxHeight: 400,
    },
});

export default LoginScreen;