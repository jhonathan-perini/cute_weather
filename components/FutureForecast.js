import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import moment from 'moment-timezone'
export default function FutureForecast({data}) {
    return (
        <View style={{flexDirection: 'row'}}>

{data && data.length > 0 ? data.map((data, idx) => (
  idx !==0 && <FutureForecastItem key={idx} forecastItem={data} />
 
)) :
<View />
}
       
     
        </View>
    )
}

const FutureForecastItem = ({forecastItem}) => {
    const img = "/Volumes/SSD/cute_weather/assets/img/"+forecastItem.weather[0].icon+".png";
    console.log( forecastItem.weather[0].icon)
return (
    <View style={styles.currentContainer}>

            <Text style={styles.currentContainerHeader}>{moment(forecastItem.dt * 1000).format('ddd')}</Text>
            <Image style={styles.imgContainer} source={{uri: img}}/>
            <Text style={styles.currentContainerText}>Night: {Math.round(forecastItem.temp.night)}°C</Text>
            <Text style={styles.currentContainerText}>Day: {Math.round(forecastItem.temp.day)}°C</Text>
    
    </View>
)
}

const styles = StyleSheet.create({
    imgContainer: {
        height: 100,
        width: 100,
        resizeMode: 'contain',
    },
    currentContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        padding: 25,
        marginLeft: 10,
        flex: 1,
    },
    currentContainerText: {
        fontSize: 15,
        textAlign: 'center',

        
    },
    currentContainerHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        padding: 8,
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 18,
        borderColor: 'white',
        overflow: 'hidden',
        marginBottom: 8
    }
})