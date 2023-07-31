import React, {useState, useEffect, useCallback} from 'react';
import Weather from './components/Search/Weather';
import './App.css';

function App() {

  // let url1="http://api.weatherapi.com/v1/current.json?key=6d8c5fb49ee64f1baa262024232907&q=Mumbai&aqi=yes";
  // let url="http://api.weatherapi.com/v1";

  const [inputCity, setInputCity] = useState("");
  // const [airQuality, setAirQuality] = useState("no");
  const [data, setData] = useState({});

  const getCityData = (inputCity) => {
    console.log("input city is >>> ", inputCity);
    // setAirQuality(airQuality);
    setInputCity(inputCity);
  }
  console.log("input city >>> ", inputCity)
  
  // const getWeatherData = (cityName) => {
  //   console.log(process.env.REACT_APP_API_URL, "------", process.env.REACT_APP_API_KEY);
  //   fetch(
  //     `${process.env.REACT_APP_API_URL}/current.json?key=${process.env.REACT_APP_API_KEY}&q=${cityName}`
  //     // `${process.env.REACT_APP_API_URL}/current.json?key=${process.env.REACT_APP_API_KEY}&q=${inputCity}&aqi=${airQuality}`
  //   )
  //   .then(results => results.json())
  //   .then(jsondata => {
  //     console.log(jsondata);
  //     setData(jsondata)
  //   })
  //   .catch(err => console.log("errr is ", err));
  // }


  // useEffect(() => {
  //   // getWeatherData()
  // })

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
