import { Colors } from '@/constants';
import { View, Text, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import Category from './component/category';
import { ScrollView } from 'react-native-gesture-handler';
import MovieTopRateApi from '@/controllers/api/MovieTopRateApi';
import { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const CategoryScreen = () => {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        MovieTopRateApi.getCategories().then((data) => {
            // console.log(data['results']);
            setCategories(data['genres']);
            setIsLoading(true);
            console.log("categories : " + categories[0].name);
        }).catch((error) => {
            console.log(error);
        })
    }, []);

    return (
        <View style={styles.root}>
            <Text style={styles.headTitle}>Category</Text>

            <View style={styles.line} />

            {isLoading ? <View >
                <SafeAreaView >

                    <Category categories={categories}></Category>

                </SafeAreaView>
            </View> : <View style={styles.loading}><ActivityIndicator /></View>}
        </View>
    );


}

const styles = StyleSheet.create({
    root: {
        height: "100%",
        backgroundColor: Colors.primary,
    },
    headTitle: {
        color: "#ffffffff",
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
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'center',
        alignContent: 'center'
    },
    loading: {
        height: Dimensions.get('screen').height,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: Colors.primary
    }
})
export default CategoryScreen;