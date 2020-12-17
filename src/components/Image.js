import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';

const kf = keyframes`
  100% {
    opacity: 1;
  }
`

const ImageStyling = styled.div`
    opacity: 0;
    animation: ${kf} 3s ease-in-out forwards;
    img{
        border: 2px dashed white;
       &:hover {
        transform: scale(1.1);
        transition: transform 0.5s ease-in-out;
       }
       transition: transform 0.5s ease-in-out; 
    }
    
`

export default function Image(){

    const [imageUrl, setImageUrl] = useState();

    useEffect(()=>{     
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=RhRYFjGb5MCLuF7CIhBeJxRDXuaR81VyTtmGCTTl&date=2020-11-04')
        .then( res => {
            setImageUrl(res.data.url)
        }) 
    }, []);
    
    

    return (
        <ImageStyling className='imageContainer'>
            <img src={imageUrl} alt=''/>
        </ImageStyling>
    )
}