import React, { useState,useEffect } from 'react';
import {Text, View,Image,fontSizes, ScrollView, TouchableOpacity,Dimensions,StyleSheet} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'

const MoviesItem = ({movie})=> {
    return (
         <TouchableOpacity style={styles.rootView}>
            <Image source={{uri: movie?.avatar}} style={styles.avatarImg} />
            <View style={styles.contentView}>
                <Text style={style=styles.nametext}>{movie?.name}</Text>
                <Text style={style=styles.theloaitext}>{movie?.theloai}</Text>
                <View style={{flexDirection: 'row'}}>
                    <Entypo name='star' style={{color: '#f2c94c', fontSize:20}}></Entypo>
                    <Text style={styles.contentText}>{movie?.danhgia}</Text>
                    <Entypo name='controller-record' style={styles.cham}></Entypo>
                    <Entypo name='clock' style={{color: '#69718b', fontSize:15,marginLeft:5}}></Entypo>
                    <Text style={styles.contentText}>{movie?.thoiluong}</Text>
                    <Entypo name='controller-record' style={styles.cham}></Entypo>
                    <Text style={styles.contentText}>{movie?.namsx}</Text>
                    
                </View>
                <Text style={style={color: '#8b93ad'}}>{movie?.mota}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default MoviesItem

const styles = StyleSheet.create({
avatarImg:{
    width:100,
    height:150,
    backgroundColor:'gray',
    borderRadius:20
},
rootView:{
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
}
)