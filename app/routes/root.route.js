import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// import MovieDetail from '@/screen/detail/home_detail/MovieDetail';
import HomeScreen from '@/screen/home/HomeScreen';
import CategoryScreen from '@/screen/category/CategoryScreen';
import ReviewOfUserScreen from '@/screen/review/ReviewOfUserScreen';

const Stack = createStackNavigator();

function RootStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ReviewOfUserScreen" component={ReviewOfUserScreen} options={
                { headerShown: false }} />
        </Stack.Navigator>

    );
}
const MainNavigator = () => {
    return (
        <NavigationContainer>
            <RootStack />
        </NavigationContainer>
    );
};
export default MainNavigator;
