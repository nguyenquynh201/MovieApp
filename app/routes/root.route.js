import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MovieDetail from '@/screen/detail/home_detail/MovieDetail';
import HomeScreen from '@/screen/home/HomeScreen';
import CategoryScreen from '@/screen/category/CategoryScreen';
import ReviewOfUserScreen from '@/screen/review/ReviewOfUserScreen';
import LoginScreen from '@/screen/login/LoginScreen';
import ResultScreen from '@/screen/signup/SignUpScreen';
import MainScreen from '@/screen/MainScreen';
import Upcoming from '@/screen/upcoming/Upcoming';
import AllPopulor from '@/screen/SeeALL/AllPopulor';
import AllToprate from '@/screen/SeeALL/AllToprate';
import AllUpComing from '@/screen/SeeALL/AllUpComing';
import SignUpScreen from '@/screen/signup/SignUpScreen';
const Stack = createStackNavigator();

function RootStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={
                { headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUpScreen} options={
                { headerShown: false }} />
            <Stack.Screen name="MainScreen" component={MainScreen} options={
                { headerShown: false }} />
            <Stack.Screen name="Home" component={HomeScreen} options={
                { headerShown: false }} />
            <Stack.Screen name="DetailMovie" component={MovieDetail} options={
                { headerShown: false }} />
            <Stack.Screen name="Category" component={CategoryScreen} options={
                { headerShown: false }} />
            <Stack.Screen name="Review" component={ReviewOfUserScreen} options={
                { headerShown: true }} />
            <Stack.Screen name="ResultScreen" component={ResultScreen} options={
                { headerShown: false }} />
            <Stack.Screen name="Upcmoming" component={Upcoming} options={
                { headerShown: true }} />
            {/* <Stack.Screen name="ResultScreen" component={ResultScreen} options={
                { headerShown: false }} /> */}
            <Stack.Screen name="AllPopulor" component={AllPopulor} options={
                { headerShown: false }} />
            <Stack.Screen name="AllToprate" component={AllToprate} options={
                { headerShown: false }} />
            <Stack.Screen name="AllUpComing" component={AllUpComing} options={
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
