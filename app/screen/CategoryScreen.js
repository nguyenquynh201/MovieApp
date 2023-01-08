import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import cardoon from "../assets/hoathinh.jpg"
const CategoryScreen = () => {
    return (
        <View style={styles.root}>
            <Text style={styles.headTitle}>Category</Text>

            <View style={styles.line} />

            <View style={styles.content}>
                <View style={styles.card}>
                    <Image style={{ height: 100, width: 150 }} source={cardoon} resizeMode="contain" />
                    <Text style={styles.cardName}>Cartoon</Text>
                </View>
                <View style={styles.card}>
                    <Image style={{ height: 100, width: 150 }} source={cardoon} resizeMode="contain" />
                    <Text style={styles.cardName}>Cartoon</Text>
                </View>
                <View style={styles.card}>
                    <Image style={{ height: 100, width: 150 }} source={cardoon} resizeMode="contain" />
                    <Text style={styles.cardName}>Cartoon</Text>
                </View>
                <View style={styles.card}>
                    <Image style={{ height: 100, width: 150 }} source={cardoon} resizeMode="center" />
                    <Text style={styles.cardName}>Cartoon</Text>
                </View>
                <View style={styles.card}>
                    <Image style={{ height: 100, width: 150 }} source={cardoon} resizeMode="contain" />
                    <Text style={styles.cardName}>Cartoon</Text>
                </View>
                <View style={styles.card}>
                    <Image style={{ height: 100, width: 150 }} source={cardoon} resizeMode="center" />
                    <Text style={styles.cardName}>Cartoon</Text>
                </View>
                <View style={styles.card}>
                    <Image style={{ height: 100, width: 150 }} source={cardoon} resizeMode="contain" />
                    <Text style={styles.cardName}>Cartoon</Text>
                </View>
                <View style={styles.card}>
                    <Image style={{ height: 100, width: 150 }} source={cardoon} resizeMode="center" />
                    <Text style={styles.cardName}>Cartoon</Text>
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
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'center',
        alignContent: 'center'
    },
    card: {
        margin: 5,
        backgroundColor: "#5D567E",
        borderRadius: 10
    },
    cardName: {
        color: "#ffffff",
        fontSize: 14,
        textAlign: 'center',
        paddingVertical: 5
    }
})
export default CategoryScreen;