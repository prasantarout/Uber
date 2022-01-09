import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen';
import RequestScreen from '../screen/RequestScreen';
import DestinationScreen from '../screen/DestinationScreen';

const Home = createNativeStackNavigator();

export default function HomeStack(){
    return(
        <Home.Navigator>
            <Home.Screen 
                name ="HomeScreen"
                component = {HomeScreen}
                options ={{headerShown:false}}
            />
            <Home.Screen 
                name ="RequestScreen"
                component = {RequestScreen}
                options ={{headerShown:false}}
            /> 
             <Home.Screen 
                name ="DestinationScreen"
                component = {DestinationScreen}
                options ={{headerShown:false}}
             />
        </Home.Navigator> 
    )
}