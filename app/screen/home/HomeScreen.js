/* eslint-disable prettier/prettier */
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Styles, Colors, sizeHeight, sizeWidth, sizeScale, Images } from "@/constants"
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Menu from '../../assets/svg/menu.svg';
import SliderMovieTopRated from './components/SliderMovieTopRated';
import Popular from './components/Popular';
import UpComing from './components/UpComing';
import { UIText } from '@/components';
export class HomeScreen extends Component {

  render() {
    const { navigation } = this.props;
    const image = [
      "https://image.tmdb.org/t/p/original/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
      "https://image.tmdb.org/t/p/original/wPU78OPN4BYEgWYdXyg0phMee64.jpg",
      "https://image.tmdb.org/t/p/original/kGzFbGhp99zva6oZODW5atUtnqi.jpg",
      "https://image.tmdb.org/t/p/original/zb6fM1CX41D9rF9hdgclu0peUmy.jpg",
      "https://image.tmdb.org/t/p/original/vI3aUGTuRRdM7J78KIdW98LdxE5.jpg",
    ];
    onChanged = (nativeEvent) => {

    }
    return (
      <ScrollView >
        <SafeAreaView style={styles.container}  >
          <View style={styles.header}>
            <TouchableOpacity style={styles.bgIcon}>
              <Image source={Images.menu} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.bgIcon}>
              <Image source={Images.notification} style={styles.icon} />
            </TouchableOpacity>
          </View>
          <SliderMovieTopRated onPresseds={() => navigation.navigate('MovieDetail')}></SliderMovieTopRated>
          <Popular></Popular>
          <UpComing></UpComing>
        </SafeAreaView>
      </ScrollView>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary
  },
  header: {
    flexDirection: 'row',
    marginHorizontal: sizeScale(10),

    marginVertical: sizeScale(10),
    justifyContent: 'space-between'
  },
  wrap: {
    // width: Dimensions.get('window').width,
    // borderRadius: sizeScale(10),
    // paddingHorizontal: sizeWidth(10),
    // height: sizeScale(200)
  },
  bgIcon: {
    width: sizeWidth(32),
    height: sizeHeight(32),
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.activeDefaultIcon
  },
  icon: {
    width: sizeWidth(16),
    height: sizeWidth(16),
  },
  popular: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 20,
    color: Colors.white,
    // fontWeight: Styles.bold,
    fontWeight: 'bold'

  },
  actionSeeAll: {
    backgroundColor: Colors.colorBgIcon,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10
  },
  textSeeAll: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: "400"
  }, listPopular: {
    height: 100
  }, image: {
    marginTop: 20,
    borderRadius: sizeScale(10),
    height: sizeScale(200),
    width: sizeScale(150),
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginHorizontal: 20
  },
});
export default HomeScreen;