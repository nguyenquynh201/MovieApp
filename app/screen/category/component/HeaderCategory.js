import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Styles, Colors, sizeHeight, sizeWidth, sizeScale, Images } from "@/constants"
import React from 'react'

const HeaderCategory = () => {

    const onBackPress = () => {
        // goBack();
    }

    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.componentIcon} onPress={onBackPress} >
                <Image source={Images.back} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.headTitle}>Category</Text>
            <TouchableOpacity style={styles.componentIcon}>
                <Image source={Images.menu} style={styles.icon} />
            </TouchableOpacity>

        </View>
    )
}

export default HeaderCategory;

const styles = StyleSheet.create({
    headTitle: {
        color: "#ffffffff",
        fontSize: 24
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: Colors.primary,
        padding: 20

    },
    componentIcon: {
        width: sizeWidth(32),
        height: sizeHeight(32),
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.activeDefaultIcon
    },
    icon: {
        width: sizeWidth(16),
        height: sizeWidth(16),
    },
});