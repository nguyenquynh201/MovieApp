import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MovieDetail from '@/screen/detail/home_detail/MovieDetail';
import HomeScreen from '@/screen/home/HomeScreen';
const Stack = createStackNavigator();

function RootStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={
                { headerShown: false }} />
            <Stack.Screen name="MovieDetail" component={MovieDetail} options={
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
