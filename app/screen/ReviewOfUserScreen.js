import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import cardoon from "../assets/hoathinh.jpg"

const ReviewOfUserScreen = () => {
    return (
        <View style={styles.root}>
            <Text style={styles.headTitle}>Reviews</Text>

            <View style={styles.line} />

            <View style={styles.content}>
                <View style={styles.card}>
                    <View style={styles.author}>
                        <Image style={{ height: 50, width: 50 }} source={cardoon} resizeMode="contain" borderRadius={100} />
                        <View>
                            <Text style={styles.authorName}>Movie Queen41</Text>
                            <Text style={styles.rating}>Rating: 7.0</Text>
                        </View>
                    </View>
                    <View style={styles.cardContent}>
                        <Text numberOfLines={2} style={styles.summaryContent}>I'd just like to thank Patty Jenkins for making a DCIThoughtSheWasWithUniverse movie that wasn't fucking garbage. If I'm being completely honest, the two people</Text>
                        <View style={styles.seeMore}>
                            <Text style={styles.seeLink}>See detail</Text>
                            <Text style={styles.createdAt}>Created at: 2022-06-23</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.content}>
                <View style={styles.card}>
                    <View style={styles.author}>
                        <Image style={{ height: 50, width: 50 }} source={cardoon} resizeMode="contain" borderRadius={100} />
                        <View>
                            <Text style={styles.authorName}>Movie Queen41</Text>
                            <Text style={styles.rating}>Rating: 7.0</Text>
                        </View>
                    </View>
                    <View style={styles.cardContent}>
                        <Text numberOfLines={2} style={styles.summaryContent}>I'd just like to thank Patty Jenkins for making a DCIThoughtSheWasWithUniverse movie that wasn't fucking garbage. If I'm being completely honest, the two people</Text>
                        <View style={styles.seeMore}>
                            <Text style={styles.seeLink}>See detail</Text>
                            <Text style={styles.createdAt}>Created at: 2022-06-23</Text>
                        </View>
                    </View>
                </View>

            </View>
            <View style={styles.content}>
                <View style={styles.card}>
                    <View style={styles.author}>
                        <Image style={{ height: 50, width: 50 }} source={cardoon} resizeMode="contain" borderRadius={100} />
                        <View>
                            <Text style={styles.authorName}>Movie Queen41</Text>
                            <Text style={styles.rating}>Rating: 7.0</Text>
                        </View>
                    </View>
                    <View style={styles.cardContent}>
                        <Text numberOfLines={2} style={styles.summaryContent}>I'd just like to thank Patty Jenkins for making a DCIThoughtSheWasWithUniverse movie that wasn't fucking garbage. If I'm being completely honest, the two people</Text>
                        <View style={styles.seeMore}>
                            <Text style={styles.seeLink}>See detail</Text>
                            <Text style={styles.createdAt}>Created at: 2022-06-23</Text>
                        </View>
                    </View>
                </View>

            </View>
            <View style={styles.content}>
                <View style={styles.card}>
                    <View style={styles.author}>
                        <Image style={{ height: 50, width: 50 }} source={cardoon} resizeMode="contain" borderRadius={100} />
                        <View>
                            <Text style={styles.authorName}>Movie Queen41</Text>
                            <Text style={styles.rating}>Rating: 7.0</Text>
                        </View>
                    </View>
                    <View style={styles.cardContent}>
                        <Text numberOfLines={2} style={styles.summaryContent}>I'd just like to thank Patty Jenkins for making a DCIThoughtSheWasWithUniverse movie that wasn't fucking garbage. If I'm being completely honest, the two people</Text>
                        <View style={styles.seeMore}>
                            <Text style={styles.seeLink}>See detail</Text>
                            <Text style={styles.createdAt}>Created at: 2022-06-23</Text>
                        </View>
                    </View>
                </View>

            </View>
        </View>
    );


}

const styles = StyleSheet.create({
    root: {
        height: "100%",
        backgroundColor: "#070D23"
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
        // flexDirection: "column",
        // justifyContent: 'center',
        // alignContent: 'center'
    },
    card: {
        margin: 5,
        backgroundColor: "#5D567E",
        borderRadius: 10,
        // flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 10
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
    }
})
export default ReviewOfUserScreen;