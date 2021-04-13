import React, { useEffect, useState } from "react";
import { Like } from "..";

function Card({ data }) {
    const randomColor = () => `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
    
    const [bgColor, setBgColor] = useState(randomColor())

    useEffect(() => {
        const init = setInterval(() => setBgColor(randomColor), 3000)
        return (() => clearInterval(init))
    },[])
 
  return (
    <div style={{background: bgColor}} role="listitem">
      <h2>{data.album}<Like /></h2>
      <h3>{data.artist}</h3>
      <img src={data.image} />
      <small>
        {data.producer} | {data.year}
      </small>
    </div>
  );
}

export default Card;
