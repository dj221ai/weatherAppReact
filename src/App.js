import React, {useState, useEffect, useCallback} from 'react';
import Weather from './components/Search/Weather';
import './App.css';

function App() {

  // let url1="http://api.weatherapi.com/v1/current.json?key=6d8c5fb49ee64f1baa262024232907&q=Mumbai&aqi=yes";

  const [inputCity, setInputCity] = useState("");
  // const [airQuality, setAirQuality] = useState("no");
  const [data, setData] = useState();
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [cityData, setCityData] = useState();

  useEffect ( () => {
    const fetchcity =   () => navigator.geolocation.getCurrentPosition(function (position){
      // console.log("lat >> ", position.coords.latitude);
      // console.log("long >> ", position.coords.longitude);
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      const url1 = `${process.env.REACT_APP_API_URL}/current.json?key=${process.env.REACT_APP_API_KEY}&q=${latitude},${longitude}`;
      // console.log("url1>>>>> ", url1);
      fetch(url1)
      .then(response => response.json())
      .then(jsondata => {
        console.log(jsondata);
        setCityData(jsondata)
      })
        // console.log(result);
      // const latlongjson = response;
      // console.log("lat long ", latlongjson);
    });
    
    console.log("lat1 >> ", latitude);
    console.log("long1 >> ", longitude);
    // console.log("cityData >> ", cityData);
    
    fetchcity();
    
    
  }, [latitude, longitude])
  // console.log("cityData1 >> ", cityData);

  useEffect(() => {
    const fetchData = async () => {
      const cityUrl = `${process.env.REACT_APP_API_URL}/current.json?key=${process.env.REACT_APP_API_KEY}&q=${inputCity}`;
      // setUrl(cityUrl);
      console.log("url >>> ", cityUrl);
      const response = await fetch(cityUrl);
      // console.log(response);
      const resJson = await response.json();
      console.log("data >>> ", resJson);
      setData(resJson);
    };

    fetchData();
  }, [inputCity])



  const getCityData = (inputCity) => {
    // console.log("input city is >>> ", inputCity);
    setInputCity(inputCity);
  }
  // console.log("input city >>> ", inputCity)
  // console.log("data >>> ", data);
  
  

  return (
    <>
      <div className='main'>
        <h3>Weather app</h3>
        <Weather onSave={getCityData} cityData={inputCity}/>
      </div>
    </>
  );
}

export default App;
