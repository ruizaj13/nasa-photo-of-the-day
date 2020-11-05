import React, {useEffect, useState} from "react";
import "./App.css";
import axios from 'axios';
import Header from './components/Header';
import ImageCard from './components/ImageCard';

function App() {
  const [nasaData, setNasaData] = useState();

  const fetchData = useEffect(() => {
    axios 
    .get('https://api.nasa.gov/planetary/apod?api_key=RhRYFjGb5MCLuF7CIhBeJxRDXuaR81VyTtmGCTTl&date=2020-11-04')
    .then( res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log('error', err)
    })
  }, []);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
