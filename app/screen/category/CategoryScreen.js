import { Colors } from '@/constants';
import { View, Text, Image } from 'react-native';
import Category from './component/category';

const CategoryScreen = () => {
    return (
        <View style={styles.root}>
            <Text style={styles.headTitle}>Category</Text>

            <View style={styles.line} />

            <ScrollView style={styles.content}>
                <Category></Category>
                <Category></Category>
                <Category></Category>
                <Category></Category>
                <Category></Category>

            </ScrollView>
        </View>
    );


}

const styles = StyleSheet.create({
    root: {
        height: "100%",
        backgroundColor: Colors.primary,
    },
    headTitle: {
        color: Colors.title,
        padding: 20,
        fontSize: 28
    },
    line: {
        marginHorizontal: 24,
        marginBottom: 10,
        borderBottomColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
})
export default CategoryScreen;