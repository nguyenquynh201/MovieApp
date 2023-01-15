import { View, Text, Image, StyleSheet, useWindowDimensions, Dimensions, ScrollView, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { Colors } from '@/constants';
import AuthenticationApi from '@/controllers/api/Authentication';

const SignUpScreen = ({ navigation: { navigate } }) => {
    const [phone, setPhone] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const onSignUpPress = () => {
        setIsLoading(false)
        if (repeatPassword !== password) {
            console.warn("Password don't match");
            return;
        }
        AuthenticationApi.register({ fullName, email, phone, password }).then((data) => {
            console.log(data)
            if (data.status === 200) {
                navigate("LoginScreen")
                setIsLoading(true);
                console.warn("Register user success");

            }
        }).catch((error) => {
            console.error("Register user can not complete");
            console.error(error);
            setIsLoading(true)

        });

    }

    const onSignInPress = () => {
        navigate("LoginScreen")
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

    const { height } = useWindowDimensions();
    return (
        <ScrollView>
            {isLoading ? <View style={styles.root}>

                <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />
                <CustomInput placeholder="FullName" value={fullName} setValue={setFullName} />
                <CustomInput placeholder="Email" value={email} setValue={setEmail} />
                <CustomInput placeholder="Phone" value={phone} setValue={setPhone} />
                <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry />
                <CustomInput placeholder="Repeat Password" value={repeatPassword} setValue={setRepeatPassword} secureTextEntry />

                <CustomButton text="Sign up" onPress={onSignUpPress} bgColor={Colors.bgButton} />
                <CustomButton text="Forgot password" onPress={onForgotPsdPress} type="white" />

                <CustomButton text="Sign in with Facebook" onPress={onSignInPressFb} bgColor="#E7EAF4" fgColor="#4765A9" />
                <CustomButton text="Sign in with Google" onPress={onSignInPressGg} bgColor="#FAE9EA" fgColor="#DD4D44" />
                <CustomButton text="Sign in with Instagram" onPress={onSignInPressIg} bgColor="#e3e3e3" fgColor="#363636" />
                <CustomButton text="Sign in" onPress={onSignInPress} type="TETIARY" />
            </View>
                : <View style={styles.loading}><ActivityIndicator /></View>}
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

export default SignUpScreen;