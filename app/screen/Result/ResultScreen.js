import { FlatList,Image, StyleSheet,searchFilter, Text, View,TouchableOpacity, TextInput } from 'react-native';
import React, { useState,useEffect } from 'react';
import MoviesItem from './MoviesItem'
import Entypo from 'react-native-vector-icons/Entypo';
const movies=[
    {
        id:1,
        name: 'The Hobbit',
        avatar: 'https://upload.wikimedia.org/wikipedia/vi/e/e3/Ng%C6%B0%E1%BB%9Di_Hobbit_H%C3%A0nh_tr%C3%ACnh_v%C3%B4_%C4%91%E1%BB%8Bnh.jpg',
        theloai: 'Fantasy,Adventure',
        danhgia: 7.8,
        thoiluong: '2h 49min',
        namsx: '2018',
        tuoi: '13+',
        mota: 'A reluctant Hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home, and the gold within it from the dragon Smaug.'
    },
    {
        id:2,
        name: 'Fantastic Beasts 1',
        avatar: 'https://upload.wikimedia.org/wikipedia/vi/9/99/Sinh_v%E1%BA%ADt_huy%E1%BB%81n_b%C3%AD_v%C3%A0_n%C6%A1i_t%C3%ACm_ra_ch%C3%BAng_%28phim%29.jpg',
        theloai: 'Fantasy,Adventure',
        danhgia: 8.8,
        thoiluong: '2h 14min',
        namsx: '2016',
        tuoi: '13+',
        mota: 'The adventures of writer Newt Scamander in New York secret community of witches and wizards seventy years before Harry Potter reads his book in school.' 
    },
    {
        id:3,
        name: 'Harry Potter 7 Part 1',
        avatar: 'https://www.123-hd.com/wp-content/uploads/2019/11/Harry-Potter-7-Part-1-2010-%E0%B9%81%E0%B8%AE%E0%B8%A3%E0%B9%8C%E0%B8%A3%E0%B8%B5%E0%B9%88-%E0%B8%9E%E0%B8%AD%E0%B8%95%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C-7.1-%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%A3%E0%B8%B2%E0%B8%87%E0%B8%A2%E0%B8%A1%E0%B8%91%E0%B8%B9%E0%B8%95.png',
        theloai: 'Fantasy,Adventure',
        danhgia: 7.7,
        thoiluong: '2h 26min',
        namsx: '2010',
        tuoi: '13+',
        mota: 'As Harry, Ron and Hermione race against time and evil to destroy the Horcruxes, they uncover the existence of the three most powerful objects in the wizarding world: the Deathly Hallows.' 
    },
    {
        id:4,
        name: 'Monster Hunter',
        avatar: 'https://upload.wikimedia.org/wikipedia/vi/9/99/Sinh_v%E1%BA%ADt_huy%E1%BB%81n_b%C3%AD_v%C3%A0_n%C6%A1i_t%C3%ACm_ra_ch%C3%BAng_%28phim%29.jpg',
        theloai: 'Action, Monste',
        danhgia: 8.8,
        thoiluong: '2h 14m',
        namsx: '2016',
        tuoi: '18+',
        mota: 'When Cpt. Artemis and her loyal soldiers are transported to a new world, they engage in a desperate battle for survival against enormous enemies with incredible powers. Feature film based on the video game by Capcom.' 
    },
    {
        id:5,
        name: 'Monster Hunter',
        avatar: 'https://upload.wikimedia.org/wikipedia/vi/9/99/Sinh_v%E1%BA%ADt_huy%E1%BB%81n_b%C3%AD_v%C3%A0_n%C6%A1i_t%C3%ACm_ra_ch%C3%BAng_%28phim%29.jpg',
        theloai: 'Fantasy,Adventure',
        danhgia: 8.8,
        thoiluong: '2h 14m',
        namsx: '2016',
        tuoi: '13+',
        mota: 'When Cpt. Artemis and her loyal soldiers are transported to a new world, they engage in a desperate battle for survival against enormous enemies with incredible powers. Feature film based on the video game by Capcom.' 
    },
    {
        id:6,
        name: 'Monster Hunter',
        avatar: 'https://upload.wikimedia.org/wikipedia/vi/9/99/Sinh_v%E1%BA%ADt_huy%E1%BB%81n_b%C3%AD_v%C3%A0_n%C6%A1i_t%C3%ACm_ra_ch%C3%BAng_%28phim%29.jpg',
        theloai: 'Fantasy,Adventure',
        danhgia: 8.8,
        thoiluong: '2h 14m',
        namsx: '2016',
        tuoi: '13+',
        mota: 'When Cpt. Artemis and her loyal soldiers are transported to a new world, they engage in a desperate battle for survival against enormous enemies with incredible powers. Feature film based on the video game by Capcom.' 
    },
]
const ResultScreen = () => {
   
    const [masterData, setmasterData]=useState([]);
    const [search,setsearch]=useState([''])
    
    


  return (
    
    <View style={styles.rootView}>
        
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
                <TextInput style={styles.searchtext} 
                value={search}
                placeholder="search here"
                onChangeText={(text) => searchFilter}
                ></TextInput>
            </View>
       
        <View>
            <FlatList 
                data={movies}
                renderItem={({item,index})=> <MoviesItem movie={item}/>}
                keyExtractor={(item,index)=>index.toString()}
            />
        </View>
    </View>
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
        searchicon:{color:'white',fontSize:30,position:'absolute',top:10,left:10},
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