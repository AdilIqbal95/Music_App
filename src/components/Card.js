import React from 'react'

function Card(props){
    return (
        <div>
        <h2>{props.data.album}</h2>
        <h3>{props.data.artist}</h3>
        <img width="306" src={props.data.image} />
        </div>
    )
}


export default Card;