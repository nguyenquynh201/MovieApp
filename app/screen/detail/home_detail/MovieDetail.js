import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import HeaderDetail from './components/HeaderDetail';
import { Colors, sizeHeight, Images, sizeScale } from '@/constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import YouTubePlay from 'react-native-youtube-iframe';
const MovieDetail = (movie) => {
    console.log(movie);
    const [isReadMoreShown, setReadMoreShown] = useState(false);
    const onPressed = () => {
        setReadMoreShown(prevState => !prevState);
    }

    return (
        <ScrollView  >
            <SafeAreaView style={styles.container}>
                <HeaderDetail onPresseds={() => { movie.navigation.goBack() }}>

                </HeaderDetail>
                <View style={styles.containerImage}>
                    <Image
                        source={{ uri: "https://image.tmdb.org/t/p/original/tmU7GeKVybMWFButWEGl2M4GeiP.jpg" }}
                        style={styles.imagePoster}
                        resizeMode='cover' />
                </View>
                <View style={styles.componentTitle}>
                    <Text style={styles.nameMovie}>
                        The GodFather
                    </Text>
                    <Text style={styles.titleGenres}>
                        An offer you can't refuse
                    </Text>
                    <Text style={styles.titleDescription}>
                        {isReadMoreShown ? "An Amazon princess comes to the world of Man in the grips of the First World War to confront the forces of evil and bring an end to human conflict. " : "hihihihihihi"}
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
                            1972
                        </Text>
                    </View>
                    <View style={styles.componentBg}>
                        <Image source={Images.start} style={styles.icon} />
                        <Text style={styles.titleReview}>
                            8.715 / 10
                        </Text>
                    </View>
                    <View style={styles.componentBg}>
                        <Image source={Images.oclock} style={styles.icon} />
                        <Text style={styles.titleReview}>
                            175min
                        </Text>
                    </View>
                </View>
                <YouTubePlay
                    height={sizeHeight(300)}
                    play={true}
                    videoId={"JoNPGqooNfQ"}

                />
            </SafeAreaView>
        </ScrollView>
    )
};

export default MovieDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
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
    titleGenres: {
        marginTop: 5,
        fontSize: 14,
        color: Colors.white,
        opacity: 0.5
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
        marginRight: 4

    },
    showMore: {
        color: Colors.colorBgIcon
    },
    viewMovie: {
        marginTop: 20,
        height: sizeHeight(300)
    }
});
