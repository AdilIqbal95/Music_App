import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Api = ({ open }) => {
    const [lyrics, setLyrics] = useState();

    useEffect(() => {
      async function getLyrics() {
        try {
          let {data} = await axios.get(`https://api.lyrics.ovh/v1/coldplay/yellow`)
          console.log(data)
          setLyrics(data.lyrics);
        } catch (err) {
          console.warn(err);
        }

      }
      getLyrics()

    },[])

    return (
      <div role="listitem">
        <h2>Lyrics Api</h2>
        
        <span onClick={ open } style={{cursor: "pointer"}}>x</span>
        { lyrics }
  
      </div>
    )
}

  

export default Api;

