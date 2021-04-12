import React from 'react'

import Card from './Card'
import album_data from '../data'

function CardList(){
    return (
        album_data.map(album => <Card data={album} />)
    )
}

function Main(){
    return (
        <main>
            <CardList />
        </main>
    )
}

export default Main