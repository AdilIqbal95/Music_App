import React from 'react'

import Card from './Card'
import AddAlbum from './AddAlbum'

import album_data from '../data'
import Header from './Header'

import '../style.css'

function CardList(){
    return (
        album_data.map(album => <Card data={album} />)
    )
}

function Main(){
    return (
        <>
        <Header/>
        <main>
            <CardList />
            <AddAlbum />
        </main>
        </>
    )
}

export default Main