import React, {useState, useEffect} from 'react';
import Weather from './components/Search/Weather';
import './App.css';
import axios from 'axios';

function App() {

  const [inputCity, setInputCity] = useState("");
  const [data, setData] = useState();
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      // const { latitude, longitude } = position.coords;
      console.log(position.coords.latitude, position.coords.longitude)
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });

    let finalApiEndpoint = `${process.env.REACT_APP_API_URL}/current.json?key=${process.env.REACT_APP_API_KEY}&q=${latitude},${longitude}`
    axios.get(finalApiEndpoint)
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      setData(error);
    });

  }, [latitude, longitude]);

  useEffect(() => {
    const fetchData = async () => {
      let cityUrl = `${process.env.REACT_APP_API_URL}/current.json?key=${process.env.REACT_APP_API_KEY}&q=${inputCity}`;
      let response = await fetch(cityUrl);
      let resJson = await response.json();
      setData(resJson);
    };

    fetchData();
  }, [inputCity])



  const getCityData = (inputCity) => {
    setInputCity(inputCity);
  }
  
  

  return (
    <>
      <div className='main'>
        <h3>Weather app</h3>
        <Weather onSave={getCityData} cityData={inputCity} data={data}/>
      </div>
    </>
  );
}

export default App;
