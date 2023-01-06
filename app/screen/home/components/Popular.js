import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Styles, Colors, sizeHeight, sizeWidth, sizeScale, Images } from "@/constants"
import { FlatList, ScrollView } from 'react-native-gesture-handler';
const Popular = () => {
    const image = [
        "https://image.tmdb.org/t/p/original/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
        "https://image.tmdb.org/t/p/original/wPU78OPN4BYEgWYdXyg0phMee64.jpg",
        "https://image.tmdb.org/t/p/original/kGzFbGhp99zva6oZODW5atUtnqi.jpg",
        "https://image.tmdb.org/t/p/original/zb6fM1CX41D9rF9hdgclu0peUmy.jpg",
        "https://image.tmdb.org/t/p/original/vI3aUGTuRRdM7J78KIdW98LdxE5.jpg",
    ];
    onChanged = (nativeEvent) => {

    }
    return (
        <View>
            <View style={styles.popular}>
                <Text style={styles.title}>
                    Popular
                </Text>
                <TouchableOpacity style={styles.actionSeeAll}>
                    <Text style={styles.textSeeAll}>
                        See all
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <FlatList data={image}
                    renderItem={({ item, index }) => <TouchableOpacity key={index}>
                        <Image key={index} resizeMode='cover' style={styles.image} source={{ uri: item }} />
                        <View style={styles.componentOpacity}>
                        </View>
                        <View style={styles.componentPlay}>
                            <Image source={Images.play} style={styles.icon} />
                        </View>
                        <View style={styles.componentOverlay}>
                            <View>
                                <Text style={styles.nameMovie}>
                                    hihih
                                </Text>

                                <View style={styles.componentRate}>
                                    <Image source={Images.start} style={styles.icon} />
                                    <Text style={styles.titleRate}>Avatar : Water </Text>
                                    <Text style={styles.titleView}>50M View </Text>

                                </View>
                            </View>
                        </View>

                    </TouchableOpacity>}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal />

            </View>
        </View>
    )
}
const styles = StyleSheet.create({

    popular: {
        marginTop: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
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
        height: sizeScale(180),
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
        backgroundColor: Colors.white,
        opacity: 0.2,
        height: sizeScale(60),
        width: sizeScale(200),

    },
    nameMovie: {
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
export default Popular;