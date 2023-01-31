import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'

import { Colors, sizeHeight, Images, sizeScale, sizeWidth } from '@/constants';

import YouTubePlay from 'react-native-youtube-iframe';
import { useNavigation } from '@react-navigation/native';
const InformationDetail = ({ movieItems, onPresseds, play, video }) => {
    const navigation = useNavigation();
    var person = Object.create(movieItems)
    console.log("hihihihi" + JSON.stringify(movieItems));
    const [isReadMoreShown, setReadMoreShown] = useState(false);
    const [date, setDate] = useState(null);

    const onPressed = () => {
        setReadMoreShown(prevState => !prevState);
    }
    return (
        <View>
            <View style={styles.containerImage}>
                <Image
                    source={{ uri: "https://image.tmdb.org/t/p/original" + movieItems?.poster_path }}
                    style={styles.imagePoster}
                    resizeMode='contain' />
            </View>
            <View style={styles.componentTitle}>
                <Text style={styles.nameMovie}>
                    {movieItems?.original_title}
                </Text>
                <View style={styles.genres}>
                    {movieItems?.genres?.map((item, index) => <Text key={index} style={styles.titleGenres}>
                        {item?.name}
                    </Text>)}
                </View>

                <Text style={styles.titleDescription}>
                    {isReadMoreShown ? movieItems?.overview : movieItems?.overview?.substr(0, 150)}
                </Text>
                <TouchableOpacity onPress={onPressed}>
                    <Text style={styles.showMore}>
                        {isReadMoreShown ? "Hide" : "Show more"}
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.componentReview}>
                <View style={styles.componentBg}>
                    <Text style={styles.titleReview}>
                        {1999}
                    </Text>
                </View>
                <TouchableOpacity style={styles.componentBg} onPress={() => navigation.navigate('Review', { item: movieItems })}>
                    <Image source={Images.start} style={styles.icon} />
                    <Text style={styles.titleReview}>
                        {movieItems?.vote_average + "/ 10"}
                    </Text>

                </TouchableOpacity>
                <View style={styles.componentBg}>
                    <Image source={Images.oclock} style={styles.icon} />
                    <Text style={styles.titleReview}>
                        {movieItems?.runtime + "min"}
                    </Text>
                </View>
            </View>
            {video == "" ? <View>

            </View> : <Text style={styles.textVideo}>
                Video
            </Text>}

            {video == "" ? <View></View> : <YouTubePlay
                height={sizeHeight(200)}
                play={play}
                videoId={video}
                onChangeState={onPresseds}
            />}
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: Colors.primary,
        paddingTop: 20
    },
    container: {

        padding: 20
    },
    containerImage: {
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
    },
    imagePoster: {
        width: sizeHeight(300),
        height: sizeHeight(350),
        borderRadius: 40,
        marginTop: 30
    },
    componentTitle: {
        paddingTop: 20
    },
    nameMovie: {
        color: Colors.white,
        fontSize: 24,
        fontWeight: 'bold'
    },
    genres: {
        flexDirection: 'row'

    },
    titleGenres: {
        marginTop: 5,
        fontSize: 14,
        color: Colors.white,
        opacity: 0.5,
        paddingHorizontal: 5

    },
    titleDescription: {
        marginTop: 5,
        color: Colors.white,
        fontSize: 16,
        fontWeight: '400'
    },
    componentReview: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 12
    },
    componentBg: {
        backgroundColor: Colors.colorBgIcon,
        padding: 6,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: sizeScale(20)
    },
    titleReview: {

        color: Colors.white,
        fontSize: 12,
        fontWeight: '400'
    },
    icon: {
        width: sizeHeight(14),
        height: sizeHeight(14),
        marginLeft: 10

    },
    showMore: {
        color: Colors.colorBgIcon
    },
    viewMovie: {
        marginTop: 20,
        height: sizeHeight(300)
    },
    loading: {
        height: Dimensions.get('screen').height,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: Colors.primary
    }, textVideo: {
        fontSize: 24,
        color: Colors.white,
        fontWeight: '900',
        marginBottom: 20
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

export default InformationDetail;