import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Styles, Colors, sizeHeight, sizeWidth, sizeScale, Images } from "@/constants"
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
const UpComing = ({ movies }) => {
    const navigation = useNavigation();
    onChanged = (nativeEvent) => {

    }
    return (
        <View style={styles.containerUpcoming}>
            <View style={styles.upcoming}>
                <Text style={styles.title}>
                    UpComing
                </Text>
                <TouchableOpacity style={styles.actionSeeAll} onPress={() => navigation.navigate('AllUpComing')}>
                    <Text style={styles.textSeeAll}>
                        See all
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <FlatList data={movies}
                    renderItem={({ item, index }) => <TouchableOpacity key={index} onPress={() => navigation.navigate('DetailMovie', { item: item })}>
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

                                <View style={styles.componentRate}>
                                    <Image source={Images.start} style={styles.icon} />
                                    <Text style={styles.titleRate}>{item?.vote_average} </Text>
                                    {/* <Text style={styles.titleView}>50M View </Text> */}

                                </View>
                            </View>
                        </View>

                    </TouchableOpacity>}
                    keyExtractor={(item, index) => item?.id?.toString()}
                    horizontal />

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    containerUpcoming: {

        marginTop: 20,
        marginBottom: 120
    },
    upcoming: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 20,
        color: Colors.white,
        // fontWeight: Styles.bold,
        fontWeight: 'bold'

    },
    actionSeeAll: {
        backgroundColor: Colors.colorBgIcon,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10
    },
    textSeeAll: {
        color: Colors.white,
        fontSize: 12,
        fontWeight: "400"
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
        height: sizeScale(80),
        width: sizeScale(200),

    },
    nameMovie: {
        width: sizeWidth(180),
        color: Colors.white,
        fontSize: 20,
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
        bottom: 80,
        position: 'absolute',
        width: sizeHeight(24),
        height: sizeHeight(24),
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white
    }
});
export default UpComing;