import React from 'react'

import Card from './Card'
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
        </main>
        </>
    )
}

export default Main