import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import WeatherScroll from './WeatherScroll';
import moment from 'moment-timezone'
function WeatherItem ({title, value, unit}) {
    return (
        <View style={styles.weatherItem}>
            <Text style={styles.weatherItemText}>{title}</Text>
            <Text style={styles.weatherItemText}>{value}{unit}</Text>
        </View>
    )
}

const DateTime = ({ current, lat, long, timezone, data}) => {
    if(data && data.daily){
  const img = "/Volumes/SSD/cute_weather/assets/img/"+data.daily[0].weather[0].icon+".png";
  const formatTM = timezone.split("/")

console.log(timezone)
    return (
        <View>
           <View style={styles.cityContainer}>
               <Text style={styles.cityText}>{formatTM[1].replace("_"," ")}</Text>
            </View>
            <View style={styles.temperatureContainer}>
               
               <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <Image style={styles.weatherConditionImg} source={{uri: img}} />
               <View style={{ alignItems: 'center',
        justifyContent: 'center'}}>
                <Text style={styles.temperatureText}>{Math.round(current.temp)}°C</Text>
                <Text style={styles.temperatureSubHeading}>H: {Math.round(data.daily[0].temp.max)}°C      M: {Math.round(data.daily[0].temp.min)}°C</Text>
                </View>
                </View>
             
            </View>
          
          


<View style={{flexDirection: 'column', justifyContent: 'space-around' }}>
<WeatherScroll weatherData={data.daily}/>
<View style={{flexDirection: 'row', justifyContent: 'space-between',  margin: 20 }}>
<WeatherItem style={styles.weatherItem}title='Sunrise' value={current ? moment.tz(current.sunrise * 1000,timezone ).format('HH:mm'): ""} />
               <WeatherItem style={styles.weatherItem}title='Sunset'  value={current ? moment.tz(current.sunset * 1000,timezone ).format('HH:mm'): ""} />
</View>
              
               </View>
             
     
        </View>
    )
    } else {
        return (
        <View />)
    }
}

export default DateTime;

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }, 
    cityContainer: {
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 30,
    },
    cityText: {
        fontSize: 50,
        fontWeight: 'bold',
    },
    temperatureContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    weatherConditionImg: {
        resizeMode: 'contain',
        width: 180,
        height: 180,
    
        marginRight: 20
        
    },
    temperatureText: {
        fontSize: 50,
        fontWeight: 'bold',
        marginTop: 30
    }, 
    weatherItem: {
        borderRadius: 20,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 1,
        height: 110,
        width: 160,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    weatherItemText: {
        fontSize: 30,
    },
    temperatureSubHeading: {
        fontSize: 15,
       fontWeight: 'bold',
    }
}

)