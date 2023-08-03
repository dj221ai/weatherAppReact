import React, {useState, useEffect} from 'react';
import Weather from './components/Search/Weather';
import './App.css';
import axios from 'axios';

function App() {

  // let url1="http://api.weatherapi.com/v1/current.json?key=6d8c5fb49ee64f1baa262024232907&q=Mumbai&aqi=yes";

  const [inputCity, setInputCity] = useState("");
  // const [airQuality, setAirQuality] = useState("no");
  const [data, setData] = useState();
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [cityData, setCityData] = useState({});

  useEffect(() => {
    console.log("my url >> ", process.env.REACT_APP_API_URL)
    navigator.geolocation.getCurrentPosition((position) => {
      // const { latitude, longitude } = position.coords;
      console.log(position.coords.latitude, position.coords.longitude)
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });

    console.log("my lat n long >>>> ", latitude, longitude);
    // https://api.weatherapi.com/v1/current.json?key=6d8c5fb49ee64f1baa262024232907&q=19.2136765,72.8609715

    let finalApiEndpoint = `${process.env.REACT_APP_API_URL}/current.json?key=${process.env.REACT_APP_API_KEY}&q=${latitude},${longitude}`
    console.log("final >> ", finalApiEndpoint)
    axios.get(finalApiEndpoint)
    .then((response) => {
      console.log("my data >>>>>> ", response.data);
      setCityData(response.data);
    })
    .catch((error) => console.log("error is ", error));
    
  }, [latitude, longitude]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     let cityUrl = `${process.env.REACT_APP_API_URL}/current.json?key=${process.env.REACT_APP_API_KEY}&q=${inputCity}`;
  //     // setUrl(cityUrl);
  //     console.log("url >>> ", cityUrl);
  //     let response = await fetch(cityUrl);
  //     // console.log(response);
  //     let resJson = await response.json();
  //     console.log("data >>> ", resJson);
  //     setData(resJson);
  //   };

  //   fetchData();
  // }, [inputCity])



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
        <Weather onSave={getCityData} cityData={inputCity} data={data} cityData1={cityData}/>
      </div>
    </>
  );
}

export default App;
