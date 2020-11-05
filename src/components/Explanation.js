import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function Explanation(){

    const [explanation, setExplanation] = useState();

    useEffect(() => {
       axios
       .get('https://api.nasa.gov/planetary/apod?api_key=RhRYFjGb5MCLuF7CIhBeJxRDXuaR81VyTtmGCTTl&date=2020-11-04')
       .then( res => {
            setExplanation(res.data.explanation);
       }) 
    }, [])

    return (
        <div className='explContainer'>
            <p>{explanation}</p>
        </div>
    )
}