import React, {useEffect, useState} from "react";
import "./App.css";
import axios from 'axios';
import Header from './components/Header';
import Image from './components/Image';
import Explanation from './components/Explanation'
import styled from 'styled-components'


const StyledApp = styled.div`
 
  background-color: ${props => props.theme.primaryColor};
  
`

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
    <StyledApp className="App">
      <Header/>
      <Image />
      <Explanation/>
    </StyledApp>
  );
}

export default App;
