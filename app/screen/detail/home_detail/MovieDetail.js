import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import HeaderDetail from './components/HeaderDetail';
import { Colors, sizeHeight, Images, sizeScale, sizeWidth } from '@/constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import MovieTopRateApi from '@/controllers/api/MovieTopRateApi';
import InformationDetail from './components/InformationDetail';
import SimilarItem from './components/SimilarItem';
const MovieDetail = (movies) => {
    const movie = movies.route.params.item;
    console.log(movie);
    const [movieItem, setMovie] = useState({});
    const [moviesSimilar, setMovieSimilar] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [date, setDate] = useState(null);
    const [video, setVideo] = useState("");
    const [play, setPlayVideo] = useState(false);
    useEffect(() => {
        fetchApiMovieById();
        fetchApiSimilar();
    }, []);
    const fetchApiMovieById = () => {
        MovieTopRateApi.getMovieDetailById({ id: movie?.id }).then((data) => {
            // console.log("vide...." + data.videos.results);
            setMovie(data);
            if (data.videos.results != []) {
                data.videos.results.forEach(element => {
                    if (element.type == "Trailer") {
                        // console.log("vide...." + item["key"]);
                        setVideo(item["key"]);
                        return;
                    } else {
                        setVideo(data.videos.results[0]["key"]);
                    }
                });

            }

            console.log("movies : " + movieItem);
            const dateObject = new Date(movieItem?.release_date);
            setDate(dateObject);
        }).catch((error) => {
            console.log(error);
        })
    }
    const fetchApiSimilar = () => {
        MovieTopRateApi.getMovieSimilar({ id: movie?.id }).then((data) => {
            setMovieSimilar(data['results']);
            setIsLoading(true);
        }).catch((error) => {
            console.log(error);
        })
    }

    return (

        <SafeAreaView style={styles.main}>
            <HeaderDetail onPresseds={() => { movies.navigation.goBack() }}>
            </HeaderDetail>
            {isLoading ?
                <ScrollView>
                    <View style={styles.container}>
                        <InformationDetail movieItems={movieItem} onPresseds={(value) => {
                            // console.warn(value);
                            if (value == "paused") {
                                setPlayVideo(false)
                            } else if (value == "playing") {
                                setPlayVideo(true)
                            }

                        }} play={play} video={video} />

                    </View>
                    <SimilarItem moviesSimilar={moviesSimilar} />
                </ScrollView>
                : <View style={styles.loading}><ActivityIndicator /></View>}
        </SafeAreaView>
    )
};

export default MovieDetail;

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
