import React, {useState} from 'react'

import { Card } from '..'

function CardList( { albumList }){
    return albumList.map((album, i) => <Card key={i} id={i + 1} data={album} />)
}

export default CardList