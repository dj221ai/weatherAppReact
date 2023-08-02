import React, {useState, useEffect} from 'react';
import Weather from './components/Search/Weather';
import './App.css';

function App() {

  // let url1="http://api.weatherapi.com/v1/current.json?key=6d8c5fb49ee64f1baa262024232907&q=Mumbai&aqi=yes";

  const [inputCity, setInputCity] = useState("");
  // const [airQuality, setAirQuality] = useState("no");
  const [data, setData] = useState();
  // const [latitude, setLatitude] = useState("");
  // const [longitude, setLongitude] = useState("");
  const [cityData, setCityData] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;

      // use the latitude and longitude to get the user's address
      fetch(`${process.env.REACT_APP_API_URL}/current.json?key=${process.env.REACT_APP_API_KEY}&q=${latitude},${longitude}`)
        .then(response => response.json())
        .then(data => {
          // setUserAddress(data.results[0].formatted_address);
          setCityData(data);

        });
    });
  }, []);

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
        <Weather onSave={getCityData} cityData={inputCity} data={data} cityData1={cityData}/>
      </div>
    </>
  );
}

export default App;
