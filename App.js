import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';
import DateTime from './components/DateTime';
import * as Location from 'expo-location';

export default function App() {
const API_KEY = 'ef7f104a4a93931e8d35414d0dbe94f9';

const [location, setLocation] = useState(null);
const [errorMsg, setErrorMsg] = useState(null);
const [data, setData] = useState([]);


useEffect(() => {
  
  (async () => {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      setErrorMsg(
        'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
      );
      return;
    }
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    } else {
      let location = await Location.getCurrentPositionAsync({});
      let {latitude, longitude } = location.coords;
      fetchDataFromAPI(latitude, longitude);
      setLocation(location);
      console.log(location);
    }

  })();
}, []);

function fetchDataFromAPI(latitude, longitude) {
  if(latitude && longitude) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {

    console.log(data)
    setData(data)
    })
  }
}

let text = 'Waiting..';
if (errorMsg) {
  text = errorMsg;
} else if (location) {
  text = JSON.stringify(location);
}
console.log(data)
  return (

    <View style={styles.container}>
      <SafeAreaView>
        <DateTime data={data} current={data.current} lat={data.lat}  long={data.long} timezone={data.timezone} /> 
        </SafeAreaView>
     
      <StatusBar style="auto" />

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
   
  },
});
