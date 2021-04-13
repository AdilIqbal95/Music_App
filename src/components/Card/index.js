import React from 'react'
<<<<<<< HEAD
import {Like} from '..'
=======
import { Like } from '..'
>>>>>>> staging

function Card({ data }){
    return (
        <div role="listitem">
            <h2>{data.album}</h2>
            <h3>{data.artist}</h3>
            <img src={data.image} />
            <small>{data.producer} | {data.year}</small>
            <Like />
        </div>
    )
}

export default Card;
