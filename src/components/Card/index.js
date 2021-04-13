import React from 'react'

function Card({data}){
    return (
        <div>
            <h2>{data.album}</h2>
            <h3>{data.artist}</h3>
            <img src={data.image} />
            <small>{data.producer} | {data.year}</small>
        </div>
    )
}

export default Card
