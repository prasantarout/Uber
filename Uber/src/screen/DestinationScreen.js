import React,{useRef,useContext,useState} from 'react'
import { View, Text, StyleSheet,Dimensions,TouchableOpacity,Image} from 'react-native';
import { parameters,colors } from '../global/styles';
import {Avatar,Icon} from 'react-native-elements'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_API_KEY} from "@env"
import { OriginContext,DestinationContext } from '../context/Context';
const SCREEN_WIDTH=Dimensions.get('window').width
const SCREEN_HEIGHT=Dimensions.get('window').height
navigator.geolocation = require('react-native-geolocation-service');

export default function Destination({navigation}) {
  const {dispatchOrigin} = useContext(OriginContext)
  const {dispatchDestination} = useContext(DestinationContext)

  const textInput1 = useRef(4);
  const textInput2 = useRef(5);

  const[destination,setDestination] = useState(false)
    return (
        <>
        <View style={styles.view2}>
           <View style={styles.view1}>
                <Icon 
                type="material-community"
                name="arrow-left"
                size={26}
                color={colors.grey1}
               onPress={()=> navigation.goBack('RequestScreen')}
                />
             </View>
          <TouchableOpacity>
            <View style={{top:25,alignItems:'center'}}>
                    <View style={styles.view3}>
                        <Avatar
                        rounded
                        avatarStyle={{}}
                        source={require('../assets/blankProfilePic.jpg')}
                        />
                        <Text style={{marginLeft:5}}>For Someone</Text>
                      <Icon 
                      type="material-community"
                      name="chevron-down"
                      color={colors.grey1}
                      size={26}
                      />
                    </View>
                    </View>
                </TouchableOpacity>
                </View>
                {destination === false &&
            <GooglePlacesAutocomplete 
                nearbyPlacesAPI = 'GooglePlacesSearch'
                placeholder ="From..."
                listViewDisplayed = "auto"
                debounce ={400}
                currentLocation ={true}
                ref ={textInput1}
                minLength ={2}
                enablePoweredByContainer = {false}
                fetchDetails ={true}
                autoFocus ={true}
                styles = {autoComplete}
                query ={{
                    key:GOOGLE_MAPS_API_KEY,
                    language:"en"
                }}

                onPress= {(data,details = null)=>{
                    dispatchOrigin({type:"ADD_ORIGIN",payload:{
                        latitude:details.geometry.location.lat,
                        longitude:details.geometry.location.lng,
                        address:details.formatted_address,
                        name:details.name
                    }})

                    setDestination(true)
                }}

            />
            }
            {destination === true &&
            <GooglePlacesAutocomplete 
                nearbyPlacesAPI = 'GooglePlacesSearch'
                placeholder ="Going to..."
                listViewDisplayed = "auto"
                debounce ={400}
                currentLocation ={true}
                ref ={textInput2}
                minLength ={2}
                enablePoweredByContainer = {false}
                fetchDetails ={true}
                autoFocus ={true}
                styles = {autoComplete}
                query ={{
                    key:GOOGLE_MAPS_API_KEY,
                    language:"en"
                }}

                onPress= {(data,details = null)=>{
                    dispatchDestination({type:"ADD_DESTINATION",payload:{
                        latitude:details.geometry.location.lat,
                        longitude:details.geometry.location.lng,
                        address:details.formatted_address,
                        name:details.name
                    }})

                    navigation.navigate("RequestScreen",{state:0})
                }}

            />
            }
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
         alignItems: 'center',
        // justifyContent: 'center',
        top:5,
        paddingTop:parameters.statusBarHeight
    },
    
    view1:{
      position:"absolute",
      top:25,
      left:12,
      backgroundColor:colors.white,
      height:40,
      width:40,
      borderRadius:20,
      justifyContent:"center",
      alignItems:"center",
      marginTop:2, 
      zIndex: 10,
      
      
    },
    
    view3:{
      flexDirection:"row",
      alignItems:"center",
      marginTop:2,   
      marginBottom:10,
      backgroundColor: colors.white,
      height:30,
      zIndex: 10,
      
    },
    
    view2:{backgroundColor:colors.white,
          zIndex:4,
          paddingBottom:10,
          
        },
    
        view24:{
          flexDirection:"row",
          justifyContent:"space-between",
         marginVertical:15,
          paddingHorizontal:20   
      }, 
      
      view25:{
          flexDirection:'row',
         alignItems:"baseline"
      },
      
      flatlist:{
          marginTop:20,
          zIndex:17,
          elevation:8
      },    
    
    });
    
    
    const autoComplete = {
    
        textInput:{
            backgroundColor: colors.grey6,
            height: 50,
            borderRadius: 5,
            paddingVertical: 5,
            paddingHorizontal: 10,
            fontSize: 15,
            flex: 1,
            borderWidth:1,
            marginHorizontal:15,
        },
        container: {
           paddingTop:20,
          flex: 1,
          backgroundColor:colors.white
              },
      
        textInputContainer: {
          flexDirection: 'row',
        },
  
  }