import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Images, sizeHeight, sizeWidth } from '@/constants'
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        getDataUser();
    });
    getDataUser = async () => {
        await AsyncStorage.getItem("signIn").then((datas) => {
            if (datas) {
                console.log(datas);
                setData(datas);
                console.log(data?.user);
            }
        });

    }
    return (
        <SafeAreaView style={styles.containerProfile}>
            <ScrollView>
                <View style={styles.body}>
                    <Image source={Images.profile} style={styles.imageProfile} />
                    <Text style={styles.nameProfile}>{data.authToken}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    containerProfile: {
        flex: 1,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    body: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageProfile: {
        marginTop: 60,
        width: sizeHeight(120),
        height: sizeHeight(120),
        borderRadius: 20
    },
    nameProfile: {
        marginTop: 10,
        fontSize: 24, color: Colors.white, fontWeight: '800'
    }
});
export default ProfileScreen;
