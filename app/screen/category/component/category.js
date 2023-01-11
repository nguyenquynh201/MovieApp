import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import cardoon from "../../../assets/category.jpg";
import { FlatList } from 'react-native-gesture-handler';
const Category = ({ categories }) => {
    return (

        <View style={styles.content}>
            <FlatList numColumns={2} data={categories} renderItem={({ item, index }) =>
                <TouchableOpacity key={index}>
                    <View style={styles.card}>
                        <Image style={{ height: 100, width: 150 }} source={cardoon} resizeMode="contain" />
                        <Text style={styles.cardName}>{item?.name}</Text>
                    </View>

                </TouchableOpacity>
            } keyExtractor={(item, index) => item?.id?.toString()} />

            {/* <View style={styles.card}>
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
            </View> */}
        </View>
    );

}

const styles = StyleSheet.create({
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
    },

})

export default Category;