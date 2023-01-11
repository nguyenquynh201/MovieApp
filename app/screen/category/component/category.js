import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import cardoon from "../../../assets/category.jpg";
import { FlatList } from 'react-native-gesture-handler';
const Category = ({ categories }) => {
    return (

        <ScrollView style={styles.content}>
            <View style={styles.container}>
                {
                    categories.map(item =>
                    (<TouchableOpacity key={item.id}>
                        <View style={styles.card}>
                            <Image style={{ height: 100, width: 150 }} source={cardoon} resizeMode="contain" />
                            <Text style={styles.cardName}>{item?.name}</Text>
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
        paddingHorizontal: 20,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'center',
        alignContent: 'center',
        paddingBottom: 100
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