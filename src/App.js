import React, {useState, useEffect, useCallback} from 'react';
import Weather from './components/Search/Weather';
import './App.css';

function App() {

  // let url1="http://api.weatherapi.com/v1/current.json?key=6d8c5fb49ee64f1baa262024232907&q=Mumbai&aqi=yes";

  const [inputCity, setInputCity] = useState("");
  // const [airQuality, setAirQuality] = useState("no");
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
        const url = `${process.env.REACT_APP_API_URL}/current.json?key=${process.env.REACT_APP_API_KEY}&q=${inputCity}`
        console.log("url >>> ", url);
        const response = await fetch(url);
        console.log(response);
        const resJson = await response.json();
        setData(resJson);
        // await fetch(url)
        // .then(res => res.json())
        // .then(result => {
        //   console.log(result);
        //   setData(result)
        // });
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
