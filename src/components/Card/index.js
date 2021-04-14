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
      <h2>{data.album}<Like /></h2>
      <h3>{data.artist}</h3>
      <img src={data.image} />
      <small>
        {data.producer} | {data.year}
        {id && <a href={`/albums/${id}`}>read more...</a>}
      </small>
    </div>
  );
 } catch (err) {
   return <h2>album not found...</h2>
 }
}

export default Card;
