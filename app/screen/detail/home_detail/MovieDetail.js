import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import HeaderDetail from './components/HeaderDetail';
import { Colors, sizeHeight, Images, sizeScale } from '@/constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import MovieTopRateApi from '@/controllers/api/MovieTopRateApi';
import YouTubePlay from 'react-native-youtube-iframe';
const MovieDetail = (movies) => {
    const movie = movies.route.params.item;
    console.log(movie);
    const [movieItem, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isReadMoreShown, setReadMoreShown] = useState(false);
    const [date, setDate] = useState(null);
    useEffect(() => {
        MovieTopRateApi.getMovieDetailById({ id: movie?.id }).then((data) => {
            // console.log(data['results']);
            setMovie(data);
            setIsLoading(true);
            console.log("movies : " + movieItem);
            const dateObject = new Date(movieItem?.release_date);
            setDate(dateObject);
        }).catch((error) => {
            console.log(error);
        })
    }, []);
    const onPressed = () => {
        setReadMoreShown(prevState => !prevState);
    }

    return (

        <SafeAreaView style={styles.container}>
            <HeaderDetail onPresseds={() => { movies.navigation.goBack() }}>
            </HeaderDetail>
            {isLoading ?
                <ScrollView>
                    <View style={styles.containerImage}>
                        <Image
                            source={{ uri: "https://image.tmdb.org/t/p/original" + movieItem?.poster_path }}
                            style={styles.imagePoster}
                            resizeMode='contain' />
                    </View>
                    <View style={styles.componentTitle}>
                        <Text style={styles.nameMovie}>
                            {movieItem?.original_title}
                        </Text>
                        <View style={styles.genres}>
                            {movieItem?.genres.map((item, index) => <Text key={index} style={styles.titleGenres}>
                                {item?.name}
                            </Text>)}
                        </View>

                        <Text style={styles.titleDescription}>
                            {isReadMoreShown ? movieItem?.overview : movieItem?.overview.substr(0, 150)}
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
                        <View style={styles.componentBg}>
                            <Image source={Images.start} style={styles.icon} />
                            <Text style={styles.titleReview}>
                                {movieItem?.vote_average + "/ 10"}
                            </Text>
                        </View>
                        <View style={styles.componentBg}>
                            <Image source={Images.oclock} style={styles.icon} />
                            <Text style={styles.titleReview}>
                                {movieItem?.runtime + "min"}
                            </Text>
                        </View>
                    </View>
                    <YouTubePlay
                        height={sizeHeight(200)}
                        play={true}
                        videoId={"JoNPGqooNfQ"}

                    />
                </ScrollView>
                : <View style={styles.loading}><ActivityIndicator /></View>}
        </SafeAreaView>
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
        marginRight: 4

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
    }
});
