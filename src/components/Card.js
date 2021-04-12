import React from 'react'

function Card(...props){
    return (
        <>
        <h2>{props.album}</h2>
        <h3>{props.artist}</h3>
        </>
    )
}


export default Card;