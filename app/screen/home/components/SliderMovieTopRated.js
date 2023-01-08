import { View, Text, ScrollView, Image, StyleSheet, Dimensions, useWindowDimensions, TouchableOpacity } from 'react-native'
import { Styles, Colors, sizeHeight, sizeWidth, sizeScale, Images } from "@/constants"
import React, { useState } from 'react'
import Animated, { useSharedValue, useAnimatedStyle, useAnimatedScrollHandler, interpolate } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
const SliderMovieTopRated = ({ movies }) => {
    console.log("hihihihi" + movies);
    const navigation = useNavigation();

    onChanged = (nativeEvent) => {

    }
    const { width } = useWindowDimensions();
    const SIZE = width * 0.7;
    const SPACER = (width - SIZE) / 2;
    const x = useSharedValue(0);
    const onScroll = useAnimatedScrollHandler({
        onScroll: event => {
            x.value = event.contentOffset.x;
        }
    })
    return (
        <View style={styles.wrap}>
            <Animated.ScrollView
                // onScroll={({ nativeEvent }) => onChanged(nativeEvent)} 
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                horizontal
                style={styles.wrap}
                bounces={false}
                scrollEventThrottle={16}
                snapToInterval={SIZE}
                decelerationRate='fast'
                onScroll={onScroll}

            >
                {

                    movies.map((item, index) => {
                        {/* console.log("https://image.tmdb.org/t/p/original" + item?.backdrop_path) */ }
                        const style = useAnimatedStyle(() => {
                            const scale = interpolate(
                                x.value,
                                [(index - 1) * SIZE, (index - 2) * SIZE, index * SIZE], [0.5, 0.6, 1]
                            );
                            return {
                                transform: [{ scale }]
                            }
                        });
                        if (!movies) {
                            return <View style={{ width: SPACER }} key={index} />


                        }
                        return <TouchableOpacity style={{ width: SIZE }} key={index} onPress={() => navigation.navigate('MovieDetail', { item: item })}>

                            <Animated.View style={[styles.imageContainer, style]}>
                                <Image key={index} resizeMode='cover' style={styles.image} source={{ uri: "https://image.tmdb.org/t/p/original" + item?.backdrop_path }} />

                            </Animated.View>

                            <View style={styles.stack}>
                                <View style={styles.componentTitle}>
                                    <Text style={styles.title}>
                                        {item?.original_title}
                                    </Text>
                                    <View style={styles.componentRate}>
                                        <Image source={Images.start} style={styles.icon} />
                                        <Text style={styles.titleRate}>{item?.vote_average + "/ 10"} </Text>
                                    </View>
                                </View>
                                <View style={styles.componentPlay}>
                                    <Image source={Images.play} style={styles.icon} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    })
                }
            </Animated.ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({

    wrap: {
        // width: Dimensions.get('window').width,
        // borderRadius: sizeScale(10),
        // paddingHorizontal: sizeWidth(10),
        // height: sizeScale(200)
    },
    image: {

        height: sizeHeight(150),
        width: Dimensions.get('window').width,


    },
    overlay: {
        height: sizeHeight(150),
        width: Dimensions.get('window').width,
        position: 'absolute',
        backgroundColor: Colors.black

    },
    imageContainer: {
        overflow: 'hidden',
        borderRadius: 24,
        marginLeft: 20,

    },
    stack: {
        position: 'absolute',
        paddingHorizontal: 30,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        bottom: 20
    },
    title: {
        color: Colors.white,
        fontSize: 20,
        fontWeight: 'bold'
    },
    icon: {
        width: sizeWidth(18),
        height: sizeWidth(18),

    },
    componentTitle: {
        flex: 1
    },
    componentRate: {
        flexDirection: 'row'

    },
    titleRate: {
        marginLeft: 5,
        color: Colors.white
    },
    componentPlay: {
        color: Colors.white,
        padding: 10,
        marginLeft: 70
    }

});
export default SliderMovieTopRated;