import React ,{ Component } from 'react'
// import {useRef} from 'react'
import { Text, View,StyleSheet,Dimensions } from 'react-native'

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; 
import { mapStyle } from '../global/mapStyle';
const SCREEN_WIDTH=Dimensions.get('window').width
export default class MapComponent extends Component {
    render() {
       
        return (
            <View>
                <MapView
            //    ref = {_map}
              provider ={PROVIDER_GOOGLE}
              style = {styles.map}
              customMapStyle ={mapStyle}
             >
           </MapView> 
            </View>
        )
    }
}

const styles=StyleSheet.create({
    map:{
        height:'100%',
        marginVertical:0,
        width:'100%'
    }
})