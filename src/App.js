
import Weather from './components/Search/Weather';
import './App.css';

function App() {

  // let url="http://api.weatherapi.com/v1/current.json?key=6d8c5fb49ee64f1baa262024232907&q=Mumbai&aqi=yes";
  // let url1="http://api.weatherapi.com/v1";

  // useEffect(() => {

  //   fetch(url)
  //   .then(results => results.json())
  //   .then(jsondata => console.log(jsondata));
  
  // }, [])
  

  return (
    <>
      <div className='main'>
        <h3>Weather app</h3>
        <Weather />
      </div>
    </>
  );
}

export default App;
