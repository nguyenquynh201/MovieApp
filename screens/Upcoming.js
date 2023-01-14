import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  TouchableWithoutFeedback,
  ImageBackground,
  TouchableWithoutFeedbackBase,
  StatusBar,
} from 'react-native';
import React from 'react';
import {dummyData, COLORS, SIZES, FONTS, icons, images} from '../constants';
import MovieDetail from './MovieDetail';
import Profiles from '../components';

const Upcoming = ({navigation}) => {
  function renderNewSeasonSection() {
    return (
      <FlatList
        horizontal
        pagingEnabled
        snapToAlignment="center"
        snapToInterval={SIZES.width}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        decelerationRate={0}
        contentContainerStyle={{
          marginTop: SIZES.radius,
        }}
        data={dummyData.newSeason}
        keyExtractor={item => item.id.toString()}
        renderItem={({item, index}) => {
          return (
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate('MovieDetail', {
                  selectedMovie: item,
                });
              }}>
              <View
                style={{
                  width: SIZES.width,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <ImageBackground
                  source={item.thumbnail}
                  resizeMode="cover"
                  style={{
                    width: SIZES.width * 0.85,
                    height: SIZES.width * 0.85,
                    justifyContent: 'flex-end',
                  }}
                  imageStyle={{
                    borderRadius: 40,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      height: 60,
                      width: '100%',
                      marginBottom: SIZES.radius,
                      paddingHorizontal: SIZES.radius,
                    }}>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <View
                        style={{
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 40,
                          height: 40,
                          borderRadius: 2,
                          backgroundColor: COLORS.transparentWhite,
                        }}>
                        <Image
                          source={icons.play}
                          style={{
                            width: 10,
                            height: 10,
                            tintColor: COLORS.white,
                          }}
                        />
                        <Text
                          style={{
                            marginLeft: SIZES.base,
                            color: COLORS.black,
                            ...FONTS.h6,
                          }}>
                          Play Now
                        </Text>
                      </View>
                      {item.stillWatching.length > 0 && (
                        <View
                          style={{
                            justifyContent: 'center',
                          }}>
                          <Text
                            style={{
                              color: COLORS.white,
                              ...FONTS.h4,
                            }}
                          />
                        </View>
                      )}
                    </View>
                  </View>
                </ImageBackground>
              </View>
            </TouchableWithoutFeedback>
          );
        }}
      />
    );
  }
  function renderTodaySection() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
        }}>
        <StatusBar hidden={true} />
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: SIZES.padding,
            alignItems: 'center',
          }}>
          <Text style={{flex: 1, color: COLORS.white, ...FONTS.h2}}>Today</Text>
          <Image
            source={icons.right_arrow}
            style={{width: 20, height: 20, tintColor: COLORS.primary}}
          />
        </View>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: SIZES.padding,
          }}
          data={dummyData.continueWatching}
          keyExtractor={item => `${item.id}`}
          renderItem={({item, index}) => {
            return (
              <TouchableWithoutFeedback
                onPress={() =>
                  navigation.navigate('MovieDetail', {
                    selectedMovie: item,
                  })
                }>
                <View
                  style={{
                    marginLeft: index == 0 ? SIZES.padding : 20,
                    marginRight:
                      index == dummyData.continueWatching.length - 1
                        ? SIZES.padding
                        : 0,
                  }}>
                  <Image
                    source={item.thumbnail}
                    resizeMode="cover"
                    style={{
                      width: SIZES.width / 3,
                      height: SIZES.width / 3 + 60,
                      borderRadius: 20,
                    }}
                  />
                  <Text
                    style={{
                      marginTop: SIZES.base,
                      color: COLORS.white,
                      ...FONTS.h4,
                    }}>
                    {item.name}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            );
          }}
        />
      </View>
    );
  }
  function renderTomorrowSection() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
        }}>
        <StatusBar hidden={true} />
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: SIZES.padding,
            alignItems: 'center',
          }}>
          <Text style={{flex: 1, color: COLORS.white, ...FONTS.h2}}>
            Tomorrow
          </Text>
          <Image
            source={icons.right_arrow}
            style={{width: 20, height: 20, tintColor: COLORS.primary}}
          />
        </View>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: SIZES.padding,
          }}
          data={dummyData.continueWatching}
          keyExtractor={item => `${item.id}`}
          renderItem={({item, index}) => {
            return (
              <TouchableWithoutFeedback
                onPress={() =>
                  navigation.navigate('MovieDetail', {
                    selectedMovie: item,
                  })
                }>
                <View
                  style={{
                    marginLeft: index == 0 ? SIZES.padding : 20,
                    marginRight:
                      index == dummyData.continueWatching.length - 1
                        ? SIZES.padding
                        : 0,
                  }}>
                  <Image
                    source={item.thumbnail}
                    resizeMode="cover"
                    style={{
                      width: SIZES.width / 3,
                      height: SIZES.width / 3 + 60,
                      borderRadius: 20,
                    }}
                  />
                  <Text
                    style={{
                      marginTop: SIZES.base,
                      color: COLORS.white,
                      ...FONTS.h4,
                    }}>
                    {item.name}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            );
          }}
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.black}}>
      <ScrollView contentContainerStyle={{paddingBottom: 100}} />
      {renderNewSeasonSection()}
      {renderTodaySection()}
      {renderTomorrowSection()}
    </SafeAreaView>
  );
};

export default Upcoming;
