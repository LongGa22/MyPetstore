import { Text, View, StyleSheet, TextInput ,FlatList } from "react-native";
import React, {useEffect,useState} from 'react'
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Breadjson from "../data/Breads.json";
import DrinkItem from "../components/DrinkItem";

export default function HomeScreen({navigation}){
    const renderItem = ({ item, index }) => {
        return <DrinkItem item={item} index={index} navigation={navigation} />;
      };
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword]=useState('')
    const getData =() =>{
        try {
            AsyncStorage.getItem('Email')
            .then(value=>{
                if(value != null){
                    setEmail(value);
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getData();
       },[]);

    return(
        <View style={StyleSheet.container}>
            <View style={{backgroundColor:"grey",height:40,}}></View>
            <Text style={{fontSize:20, alignSelf:'center', color:'green', paddingVertical:10}}>Hello {email}</Text>
            <View style={styles.search}>
                <Feather name="search" size={25} color="black" style={{marginTop:12}} />
                <TextInput placeholder="Tìm Kiếm"></TextInput>
            </View >

            <View style={{marginVertical:20}}>
                <FlatList
                data={Breadjson}
                horizontal
                showsHorizontalScrollIndicator={true}
                keyExtractor={(item, index) => item + index}
                renderItem={renderItem}
                />
            </View>

            

        </View>


        

    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        width:'100%',
        height:'100%',
        paddingHorizontal:50,
    },
    location_pin: {
        paddingStart:15,
        flexDirection:'column',
        paddingRight:80,
      
    },
    search: {
        height:45,
        width:'85%',
        backgroundColor:'#ddf4ff',
        borderRadius:20,
        flexDirection:'row',
        justifyContent:'center',
        alignSelf:'center',
        borderRadius:15,
        // paddingHorizontal:20,
        // paddingVertical:20,
        backgroundColor:'pink',

    },
    text:{
        fontSize:25,
    },
    // add tu day
    separator:{
        width:8,
        backgroundColor:'white',
      },

      item:{
        alignItems:'center',
        paddingVertical:1,
      },
      BannerContainer:{
        backgroundColor:'#D9D9D9',
        borderRadius:15,
        height:200,
        width:350,
        justifyContent:'center',
        alignItems:'center',
      },
  
      Banner:{
        height:'100%',
        width:'100%',
        borderRadius:15,
       },
       // icon tu day
       IconContainer:{
        backgroundColor:'red',
        borderRadius:0,
        height:70,
        width:70,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
      },
  
      Icon:{
        height:'100%',
        width:'100%',
        borderRadius:15,
       },

   

   
});