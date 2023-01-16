import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MovieDetail from '@/screen/detail/home_detail/MovieDetail';
import HomeScreen from '@/screen/home/HomeScreen';
import CategoryScreen from '@/screen/category/CategoryScreen';
import ReviewOfUserScreen from '@/screen/review/ReviewOfUserScreen';
import LoginScreen from '@/screen/login/LoginScreen';
import ResultList from '@/screen/Result/ResultList';
import SignUpScreen from '@/screen/signup/SignUpScreen';
import MainScreen from '@/screen/MainScreen';


const Stack = createStackNavigator();

function RootStack() {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen name="LoginScreen" component={LoginScreen} options={
                { headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUpScreen} options={
                { headerShown: false }} /> */}
            <Stack.Screen name="MainScreen" component={MainScreen} options={
                { headerShown: false }} />
            <Stack.Screen name="Home" component={HomeScreen} options={
                { headerShown: false }} />
            <Stack.Screen name="DetailMovie" component={MovieDetail} options={
                { headerShown: false }} />
            <Stack.Screen name="Category" component={CategoryScreen} options={
                { headerShown: false }} />
            <Stack.Screen name="Review" component={ReviewOfUserScreen} options={
                { headerShown: false }} />
            <Stack.Screen name="ResultList" component={ResultList} options={
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
