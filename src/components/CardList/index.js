import React, {useState} from 'react'

import { Card } from '..'

function CardList( { albumList }){
    return (
        albumList.map((album, i) => <Card key={i} data={album} />)
    )
}

export default CardList