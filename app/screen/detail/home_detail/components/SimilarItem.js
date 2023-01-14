import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import { Colors, sizeHeight, Images, sizeScale, sizeWidth } from '@/constants';


const SimilarItem = ({ moviesSimilar }) => {
    return (
        <View style={styles.moviesSimilarItem}>
            <Text style={styles.moviesSimilar}>
                Similar movie
            </Text>
            <FlatList data={moviesSimilar}
                renderItem={({ item, index }) => <TouchableOpacity key={index}>
                    <Image key={index} resizeMode='cover' style={styles.image} source={{ uri: "https://image.tmdb.org/t/p/original" + item?.backdrop_path }} />
                    <View style={styles.componentOpacity}>
                    </View>
                    <View style={styles.componentPlay}>
                        <Image source={Images.play} style={styles.icon} />
                    </View>
                    <View style={styles.componentOverlay}>
                        <View>
                            <Text style={styles.nameMovie}>
                                {item?.original_title}
                            </Text>


                        </View>
                    </View>

                </TouchableOpacity>}
                keyExtractor={(item, index) => item?.id?.toString()}
                horizontal />
        </View>
    )
}

export default SimilarItem;

const styles = StyleSheet.create({
    moviesSimilarItem: {
        marginBottom: 20
    },
    moviesSimilar: {
        color: Colors.title,
        fontSize: 24, fontWeight: '500'
    },
    listPopular: {
        height: 100
    },
    image: {
        marginTop: 20,
        borderRadius: sizeScale(20),
        height: sizeScale(220),
        width: sizeScale(200),
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginHorizontal: 20
    },
    componentOverlay: {
        position: 'absolute',
        bottom: 10,
        left: 30,


    },
    componentOpacity: {
        position: 'absolute',
        bottom: 0,
        left: 20,
        width: 60,
        height: 60,
        borderBottomEndRadius: sizeScale(20),
        borderBottomStartRadius: sizeScale(20),
        backgroundColor: Colors.black,
        opacity: 0.5,
        height: sizeScale(60),
        width: sizeScale(200),

    },
    nameMovie: {
        width: sizeWidth(180),
        color: Colors.white,
        fontSize: 18,
        fontWeight: 'bold'
    },
    icon: {
        width: sizeWidth(16),
        height: sizeWidth(16),
    },
    titleRate: {
        marginLeft: 5,
        color: Colors.white
    },
    titleView: {
        marginLeft: 5,
        color: Colors.white,
        fontWeight: 'bold'
    },
    componentRate: {
        flexDirection: 'row'
    },
    componentPlay: {
        right: 40,
        bottom: 50,
        position: 'absolute',
        width: sizeHeight(24),
        height: sizeHeight(24),
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white
    }
});
