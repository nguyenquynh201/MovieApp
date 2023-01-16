import { FlatList,SafeAreaView,Image,ItemSeparatorView, StyleSheet, Text, View,TouchableOpacity, TextInput } from 'react-native';
import React, { useState,useEffect } from 'react';
import MoviesItem from './MoviesItem'
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';




const ResultScreen = (movie) => {
  const [movies, setMovies] = useState([]);  
  const [isLoading, setIsLoading] = useState(false);
  const  [search,setsearch]= useState('');
  const [masterData, setmasterData]=useState([]);


useEffect(()=> {
  fetchApiMovieById();
  return ()=>{}
},[]);
  
  const movieitem = ({item}) => {
    return (
      <TouchableOpacity style={styles.rootlistView} key={index} onPress={() => navigation.navigate('DetailMovie', { item: movie })}>
            <Image key={index} resizeMode='cover' source={{ uri: "https://image.tmdb.org/t/p/original" + item?.backdrop_path }} />
            <View style={styles.contentView}>
                <Text style={style=styles.nametext}>{item?.original_title.toUpperCase()}</Text>
                <Text style={style=styles.theloaitext}>Fantasy,Adventure</Text>
                <View style={{flexDirection: 'row'}}>
                    <Entypo name='star' style={{color: '#f2c94c', fontSize:20}}></Entypo>
                    <Text style={styles.contentText}>{item?.vote_average}</Text>
                    <Entypo name='controller-record' style={styles.cham}></Entypo>
                    
                </View>
                
            </View>
        </TouchableOpacity>
    )
  }  
    
const searchmovies =(text)=>{
    if (text) {
      const  newData = masterData.movies((item)=>{
        const itemData =item.original_title ? item.title.toUpperCase() 
        : ''.toUpperCase();
        const textData= text.toUpperCase();
        return itemData.indexOf(textData)> -1;
      });
    setMovies(newData);
    setsearch(text);
      }else {
        setMovies(masterData);
        setsearch(text);
      }

}

  return (
    
    <SafeAreaView style={styles.rootView}>
        
        <View style={{height:100,padding:20,flexDirection:'row'}}>
                    <TouchableOpacity style={{height:60,
                    width:60,borderRadius:20,
                    backgroundColor:'#222c4f'}}>
                    <Entypo name='chevron-left' style={{color: 'white', fontSize:40,marginHorizontal:10,marginVertical:10}}></Entypo></TouchableOpacity>
                    <View><Text style={{color:'white',marginHorizontal:110,fontSize:20}}>Result</Text>
                    
                    </View>
                    
            
        </View>
        <View style={styles.searchview}>
        <Entypo name='magnifying-glass' style={styles.searchicon}></Entypo>
                <TextInput style={styles.searchtext} value={search} 
                placeholder="search Here"
                onChangeText={(text)=> searchmovies(text)}></TextInput>
            </View>
       
        <View>
            <FlatList 
                data={movies}
                renderItem={movieitem}
                keyExtractor={(item,index)=>item?.id?.toString()}  
            />
        </View>
    </SafeAreaView>
  )
}

export default ResultScreen

const styles = StyleSheet.create({
    rootView:{
        flex: 1,
        backgroundColor: '#070d23'
    },
    searchview:{height:60,marginHorizontal:20, marginTop:10,marginBottom:20,flexDirection:'row'},
    searchtext:{height:60,
        color:'white',
        fontSize:20,
        opacity:0.8,
        paddingStart:40,
        placeholder:'search',
         backgroundColor:'#222c4f',
        borderRadius:20,flex:1},
        searchicon:{color:'white',fontSize:30,position:'absolute',top:15,left:10},
        avatarImg:{
          width:100,
          height:150,
          backgroundColor:'gray',
          borderRadius:20
      },
      rootlistView:{
          height: 170,
          backgroundColor: '#070d23',
          marginLeft:20,
          marginBottom:10,
          flexDirection:'row'
      },
      contentView:{
          backgroundColor:'#070d23',
          flex:1,
          paddingTop:5,
          paddingLeft:5
      },
      cham:{color: '#69718b',
       fontSize:10,
       alignSelf:'center',
       marginLeft:10
      },
      contentText:{color:'#69718b',
      marginLeft:5
      },
      nametext:{color: 'white',
      fontSize:20
      },
      theloaitext:{color: '#6a718a',marginTop:2}
})