import { Colors } from '@/constants';
import { View, Text, StyleSheet, Dimensions, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MovieTopRateApi from '@/controllers/api/MovieTopRateApi';
import { useState, useEffect } from 'react';
import Review from './component/Review';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderReview from './component/HeaderCategory';

const ReviewOfUserScreen = (router) => {
    const id = router.route.params.item.id;
    // console.log(id);
    const [reviewOfUser, setReviewOfUser] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        MovieTopRateApi.getReviewByMovieId(id).then((data) => {
            // console.log(data['results']);
            setReviewOfUser(data['results']);
            setIsLoading(true);
            // console.log("categories : " + reviewOfUser[0].name);
        }).catch((error) => {
            console.log(error);
        })
    }, []);

    return (
        <View style={styles.root}>
            <HeaderReview></HeaderReview>

            {isLoading ? <View >
                <SafeAreaView >

                    <Review reviews={reviewOfUser}></Review>

                </SafeAreaView>
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
        fontSize: 20
    },
    line: {
        marginHorizontal: 24,
        marginBottom: 10,
        borderBottomColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    content: {
        flexDirection: "column",
        justifyContent: 'center',
        alignContent: 'center',
    },

    loading: {
        height: Dimensions.get('screen').height,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: Colors.primary
    },

})
export default ReviewOfUserScreen;