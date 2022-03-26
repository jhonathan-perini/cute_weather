import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React from 'react';
import { ScrollView, View, Image, Text, StyleSheet } from 'react-native';
import FutureForecast from './FutureForecast';
import moment from 'moment-timezone';
export default function WeatherScroll({weatherData}) {
    return (
        <ScrollView contentContainerStyle={styles.scroll} horizontal={true}>
            <CurrentTemperature data={weatherData && weatherData.length > 0 ? weatherData[0] : {}} />
            <FutureForecast data={weatherData} />
        </ScrollView>
    )
}

const CurrentTemperature = ({data}) => {
if(data && data.weather){
    const img = "/Volumes/SSD/cute_weather/assets/img/"+data.weather[0].icon+".png";
    return(
        <View style={styles.currentContainer}>
            <Image style={styles.imgContainer} source={{uri: img}}/>
            <View style={{marginLeft: 30, }}>
                <Text style={styles.currentContainerHeader}>{moment(data.dt * 1000).format('dddd')}</Text>
                <Text style={styles.currentContainerText}>Night: {Math.round(data.temp.night)}°C</Text>
                <Text style={styles.currentContainerText}>Day: {Math.round(data.temp.day)}°C</Text>
            </View>
            
        </View>
        )
} else {
    return (
        <View></View>
    )
}
    
}

const styles = StyleSheet.create({
    imgContainer: {
        height: 130,
        width: 130,
        resizeMode: 'contain',
    },
    scroll: {
        margin: 20,
        paddingRight: 40
    },
    currentContainer: {
  
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
      
        paddingLeft: 50,
        paddingRight: 37
     
       
    },
    
    currentContainerText: {
        fontSize: 18,
        textAlign: 'center',
    },
    currentContainerHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 22,
        borderColor: 'white',
        overflow: 'hidden',
        marginBottom: 8
    }
})