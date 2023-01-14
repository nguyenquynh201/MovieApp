import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Styles, Colors, sizeHeight, sizeWidth, sizeScale, Images } from "@/constants"
import React from 'react'

const HeaderDetail = ({ onPresseds }) => {

    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.componentIcon} onPress={onPresseds} >
                <Image source={Images.back} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.componentIcon}>
                <Image source={Images.menu} style={styles.icon} />
            </TouchableOpacity>

        </View>
    )
}

export default HeaderDetail;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: Colors.primary,
        paddingHorizontal: 20

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