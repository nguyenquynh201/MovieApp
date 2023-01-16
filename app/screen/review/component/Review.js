import { Colors } from '@/constants';
import { View, Text, StyleSheet, Dimensions, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Moment from 'moment';
import Images from '@/constants/image';

const Review = ({ reviews }) => {
    return (

        <ScrollView>
            <View style={styles.container}>
                {
                    reviews.map(item =>
                    (<TouchableOpacity style={styles.card} key={item.id}>
                        <View >
                            <View style={styles.author}>
                                <Image style={{ height: 50, width: 50 }} source={{ uri: "https://vnn-imgs-f.vgcloud.vn/2020/03/23/11/trend-avatar-1.jpg" }} resizeMode="contain" borderRadius={100} />
                                <View>
                                    <Text style={styles.authorName}>{item.author}</Text>
                                    <View style={styles.parentRating}>
                                        <Text style={styles.rating}>Rating: {item.author_details.rating}</Text>
                                        <Image source={Images.start} style={styles.icon} />
                                    </View>
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

                    </TouchableOpacity>))
                }
            </View>
            {/* <FlatList numColumns={2} data={categories} renderItem={({ item, index }) =>
                <TouchableOpacity key={index}>
                    <View style={styles.card}>
                        <Image style={{ height: 100, width: 150 }} source={cardoon} resizeMode="contain" />
                        <Text style={styles.cardName}>{item?.name}</Text>
                    </View>

                </TouchableOpacity>
            } keyExtractor={(item, index) => item?.id?.toString()} /> */}
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        // flexDirection: "row",
        paddingVertical: 20,
        width: "100 %"
    },

    card: {
        backgroundColor: "#5D567E",
        borderRadius: 10,
        // flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginHorizontal: 20,
        marginBottom: 20,
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
    parentRating: {
        color: "#ffffff",
        fontSize: 12,
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: 'row'
    },
    rating: {
        color: "#ffffff",
        fontSize: 12,
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
    icon: {
        width: 14,
        height: 14,
        marginLeft: 3

    },

})

export default Review;