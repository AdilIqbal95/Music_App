import React, { useEffect, useState } from "react";
import { Like } from "..";
import randomColor from './helpers'

function Card({ data, id }) {    
    const [bgColor, setBgColor] = useState(randomColor())

    useEffect(() => {
        const init = setInterval(() => setBgColor(randomColor), 3000)
        return (() => clearInterval(init))
    },[])
 try {
  return (
    <div style={{background: bgColor}} role="listitem">
      {id && <a href={`/albums/${id}`}>more info...</a>}<Like />
      <h2 style={{marginTop: "1rem"}}>{data.album}</h2>
      <h3>{data.artist}</h3>
      <img src={data.image} />
      <small>
        {data.producer} | {data.year}
      </small>
    </div>
  );
 } catch (err) {
   return <h1>album not found...</h1>
 }
}

export default Card;
