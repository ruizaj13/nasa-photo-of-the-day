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
    object-fit: scale-down;
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
            <img src={imageUrl}/>
        </ImageStyling>
    )
}