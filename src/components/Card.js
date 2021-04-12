import React from 'react'

function Card(props){
    return (
        <div>
            <h2>{props.data.album}</h2>
            <h3>{props.data.artist}</h3>
            <img src={props.data.image} />
            <small>{props.data.producer} | {props.data.year}</small>
        </div>
    )
}


export default Card;