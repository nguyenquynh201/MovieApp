import { View, Text, Image } from 'react-native';
import cardoon from "../assets/hoathinh.jpg"
const Category = () => {
    return (
        <View style={styles.card}>
            <Image style={{ height: 100, width: 150 }} source={cardoon} resizeMode="contain" />
            <Text style={styles.cardName}>Cartoon</Text>
        </View>
    );

}

const styles = StyleSheet.create({
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

export default Category;