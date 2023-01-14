import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, ActivityIndicator, Dimensions } from 'react-native';
import React, { useState } from 'react';
import Logo from '@/assets/logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { Colors } from '@/constants';
import AuthenticationApi from '@/controllers/api/Authentication';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationActions } from 'react-navigation';


const LoginScreen = ({ navigation: { navigate } }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const onSignInPress = () => {
        setIsLoading(false)
        AuthenticationApi.login({ username, password }).then((data) => {
            console.log(data)
            if (data.status === 200) {
                console.log(data)
                AsyncStorage.setItem("user", data.data.signIn)

                console.warn("Login success");
                navigate("MainScreen")
                setIsLoading(true);
            }
        }).catch((error) => {
            console.log(error);
            setIsLoading(true)

        })
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
        navigate('SignUp')
    }
    const { height } = useWindowDimensions();
    return (
        <ScrollView>
            {isLoading ? <View style={styles.root}>
                <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />

                <CustomInput placeholder="Username" value={username} setValue={setUsername} />
                <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />
                <CustomButton text="Sign in" onPress={onSignInPress} bgColor={Colors.bgButton} />

                <CustomButton text="Forgot password" onPress={onForgotPsdPress} type="white" />

                <CustomButton text="Sign in with Facebook" onPress={onSignInPressFb} bgColor="#E7EAF4" fgColor="#4765A9" />
                <CustomButton text="Sign in with Google" onPress={onSignInPressGg} bgColor="#FAE9EA" fgColor="#DD4D44" />
                <CustomButton text="Sign in with Instagram" onPress={onSignInPressIg} bgColor="#e3e3e3" fgColor="#363636" />

                <CustomButton text="Don't have an account" onPress={onSignUpPress} type="TETIARY" />
            </View> : <View style={styles.loading}><ActivityIndicator /></View>}
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    root: {
        backgroundColor: Colors.primary,
        alignItems: 'center',
        padding: 15,
    },
    logo: {
        width: '25%',
        maxWidth: 500,
        maxHeight: 400,
    },
    loading: {
        height: Dimensions.get('screen').height,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: Colors.primary
    }
});

export default LoginScreen;