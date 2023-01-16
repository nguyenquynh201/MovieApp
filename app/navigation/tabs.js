import HomeScreen from "@/screen/home/HomeScreen";
import ProfileScreen from "@/screen/profile/ProfileScreen";
import ResultScreen from "@/screen/Result/ResultScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { sizeHeight, sizeScale, sizeWidth, Colors, Images } from '@/constants';
import { StyleSheet, Image, View, Text } from 'react-native'
const Tab = createBottomTabNavigator();
const Tabs = () => {
    return (
        <Tab.Navigator screenOptions={({ router }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                bottom: sizeHeight(25),
                left: sizeWidth(20),
                right: sizeWidth(20),
                backgroundColor: Colors.white,
                borderRadius: 20,
                height: sizeHeight(60),
                ...styles.shadow
            },

        })} >
            <Tab.Screen name="Home" component={HomeScreen} options={
                {
                    headerShown: false, tabBarIcon: ({ focused }) => {
                        return <View style={styles.componentText}>
                            <Image source={Images.icon_home} resizeMode='contain' style={{
                                width: 25, height: 25, tintColor: focused ? Colors.primary : Colors.activeDefaultIcon
                            }} />
                            <Text style={{ color: focused ? Colors.primary : Colors.activeDefaultIcon }}>
                                Home
                            </Text>
                        </View>
                    }
                }} />
            <Tab.Screen name="Result" component={ResultScreen} options={
                {
                    headerShown: false, tabBarIcon: ({ focused }) => {
                        return <View style={styles.componentText} >
                            <Image source={Images.icon_result} resizeMode='contain' style={{
                                width: 25, height: 25, tintColor: focused ? Colors.primary : Colors.activeDefaultIcon
                            }} />
                            <Text style={{ color: focused ? Colors.primary : Colors.activeDefaultIcon }}>
                                Search
                            </Text>
                        </View>
                    }
                }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={
                {
                    headerShown: false, tabBarIcon: ({ focused }) => {
                        return <View style={styles.componentText}>
                            <Image source={Images.icon_profile} resizeMode='contain' style={{
                                width: 25, height: 25, tintColor: focused ? Colors.primary : Colors.activeDefaultIcon
                            }} />
                            <Text style={{ color: focused ? Colors.primary : Colors.activeDefaultIcon }}>
                                Profile
                            </Text>
                        </View>
                    }
                }} />
        </Tab.Navigator>
    );
}
const styles = StyleSheet.create({
    shadow: {
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.30,
        shadowRadius: 3.5,
        elevation: 5
    },
    componentText: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    }
});
export default Tabs;