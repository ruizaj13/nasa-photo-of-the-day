import React, {useEffect, useState} from "react";
import "./App.css";
import axios from 'axios';
import Header from './components/Header';
import Image from './components/Image';
import Explanation from './components/Explanation'

function App() {
  // const [nasaData, setNasaData] = useState();
 

  useEffect(() => {
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
      <Header/>
      <Image />
      <Explanation/>
    </div>
  );
}

export default App;
