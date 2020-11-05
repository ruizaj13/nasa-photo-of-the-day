import React, {useEffect, useState} from 'react';
import axios from 'axios';

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
        <div className='imageContainer'>
            <img src={imageUrl} style={{border:'5px dashed #0B3D91'}} />
        </div>
    )
}