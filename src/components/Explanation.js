import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components'

const StyledExplanation = styled.div `            
    color: ${props => props.theme.secondaryColor};
    padding-bottom: 1%;
    
    h2{
        text-shadow: ${props => props.theme.dropShadow};
    }

    p{
       width: 50%;
       margin-left: auto;
       margin-right: auto;
       padding-bottom: 3%;
        
    }
`

export default function Explanation(){

    const [explanation, setExplanation] = useState();
    const [title, setTitle] = useState();

    useEffect(() => {
       axios
       .get('https://api.nasa.gov/planetary/apod?api_key=RhRYFjGb5MCLuF7CIhBeJxRDXuaR81VyTtmGCTTl&date=2020-11-04')
       .then( res => {
            setExplanation(res.data.explanation);
            setTitle(res.data.title);
       }) 
    }, [])

    return (
        <StyledExplanation className='explContainer'>
            <h2>{title}</h2>
            <p>{explanation}</p>
        </StyledExplanation>
    )
}