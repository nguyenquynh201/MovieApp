import { Colors } from '@/constants';
import { View, Text, StyleSheet, Dimensions, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MovieTopRateApi from '@/controllers/api/MovieTopRateApi';
import { useState, useEffect } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import Moment from 'moment';

const ReviewOfUserScreen = () => {
    // const movie = movies.route.params.item;
    const [reviewOfUser, setReviewOfUser] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        MovieTopRateApi.getReviewByMovieId('297762').then((data) => {
            // console.log(data['results']);
            setReviewOfUser(data['results']);
            setIsLoading(true);
            console.log("categories : " + reviewOfUser[0].name);
        }).catch((error) => {
            console.log(error);
        })
    }, []);

    return (
        <View style={styles.root}>
            <Text style={styles.headTitle}>Reviews</Text>

            <View style={styles.line} />

            {isLoading ? <View>
                <FlatList numColumns={2} data={reviewOfUser} renderItem={({ item, index }) =>
                    <TouchableOpacity key={index}>
                        <View style={styles.content}>
                            <View style={styles.card}>
                                <View style={styles.author}>
                                    <Image style={{ height: 50, width: 50 }} source={item.author_details.avatar_path} resizeMode="contain" borderRadius={100} />
                                    <View>
                                        <Text style={styles.authorName}>{item.author}</Text>
                                        <Text style={styles.rating}>Rating: {item.author_details.rating}</Text>
                                    </View>
                                </View>
                                <View style={styles.cardContent}>
                                    <Text numberOfLines={2} style={styles.summaryContent}>{item.content}</Text>
                                    <View style={styles.seeMore}>
                                        <Text style={styles.seeLink}>See detail</Text>
                                        <Text style={styles.createdAt}>Created at: {Moment(item.created_at).format("YYYY-MM HH:mm")}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                    </TouchableOpacity>
                } keyExtractor={(item, index) => item?.id?.toString()} />

            </View> : <View style={styles.loading}><ActivityIndicator /></View>}
        </View>
    );


}

const styles = StyleSheet.create({
    root: {
        height: "100%",
        backgroundColor: "#070D23",
        paddingBottom: 100
    },
    headTitle: {
        color: "#ffffff",
        padding: 20,
        fontSize: 28
    },
    line: {
        marginHorizontal: 24,
        marginBottom: 10,
        borderBottomColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    content: {
        paddingHorizontal: 20,
        flexDirection: "column",
        justifyContent: 'center',
        alignContent: 'center',
    },
    card: {
        margin: 5,
        backgroundColor: "#5D567E",
        borderRadius: 10,
        // flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: "100 %"
    },

    author: {
        flexDirection: "row",
        paddingVertical: 5
    },

    authorName: {
        color: "#ffffff",
        fontSize: 18,
        paddingHorizontal: 10,

    },
    rating: {
        color: "#ffffff",
        fontSize: 12,
        paddingHorizontal: 10,
        paddingVertical: 5
    },

    cardContent: {
        paddingHorizontal: 10,

    },

    summaryContent: {
        color: "#ffffff",
        textAlign: "left",
        fontSize: 12
    },

    seeMore: {
        margin: 5,
        backgroundColor: "#5D567E",
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },

    seeLink: {
        color: "#1A73E8",
        textDecorationLine: 'underline',
    },

    createdAt: {
        color: "#ffffff"
    },
    loading: {
        height: Dimensions.get('screen').height,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: Colors.primary
    }
})
export default ReviewOfUserScreen;