/* eslint-disable prettier/prettier */
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { Component, useEffect, useState } from 'react';
import { initialWindowMetrics, SafeAreaView } from 'react-native-safe-area-context';
import { Styles, Colors, sizeHeight, sizeWidth, sizeScale, Images, Config } from "@/constants"
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Menu from '../../assets/svg/menu.svg';
import SliderMovieTopRated from './components/SliderMovieTopRated';
import Popular from './components/Popular';
import UpComing from './components/UpComing';
import { UIText } from '@/components';
import MovieTopRateApi from '@/controllers/api/MovieTopRateApi';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [movies, setMovies] = useState([]);
  const [moviePopulars, setMoviesPopular] = useState([]);
  const [movieUpcomings, setMoviesUpcoming] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetchApiTopRated();
    fetchApiPopular();
    fetchApiUpComming();
  }, []);
  const fetchApiTopRated = () => {
    MovieTopRateApi.getListMovieTopRated().then((data) => {
      // console.log(data['results']);
      setMovies(data['results']);
      console.log("movies : " + movies[0]);
    }).catch((error) => {
      console.log(error);
    })
  }
  const fetchApiPopular = () => {
    MovieTopRateApi.getListMoviePopular().then((data) => {
      // console.log(data['results']);
      setMoviesPopular(data['results']);
      console.log("movies : " + movies[0]);
    }).catch((error) => {
      console.log(error);
    })
  }
  const fetchApiUpComming = () => {
    MovieTopRateApi.getListMovieUpcoming().then((data) => {
      // console.log(data['results']);
      setMoviesUpcoming(data['results']);
      setIsLoading(true);
      console.log("movies : " + movies[0]);
    }).catch((error) => {
      console.log(error);
    })
  }
  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.header}>
        <TouchableOpacity style={styles.bgIcon}>
          <Image source={Images.menu} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bgIcon}>
          <Image source={Images.notification} style={styles.icon} />
        </TouchableOpacity>
      </View>

      {isLoading ? <ScrollView >

        <SliderMovieTopRated movies={movies}></SliderMovieTopRated>
        <Popular movies={moviePopulars} ></Popular>

        <UpComing movies={movieUpcomings}></UpComing>
      </ScrollView> : <View style={styles.loading}><ActivityIndicator /></View>}



    </SafeAreaView>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
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
  loading: {
    height: Dimensions.get('screen').height,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: Colors.primary
  }
});
