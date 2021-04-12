import React, {useState} from 'react'

import Card from './Card'
import AddAlbum from './AddAlbum'

import album_data from '../data'
import Header from './Header'

import '../style.css'

function CardList(props){
    return (
        props.albumList.map(album => <Card data={album} />)
    )
}

function Main(){

    const [albumList, setAlbumList] = useState(album_data)

    function upDateAlbumList(newData){
        const newList = [...albumList, newData]
        setAlbumList(newList)
    }

    return (
        <>
        <Header/>
        <main>
            <CardList albumList={albumList} />
            <AddAlbum upDateAlbumList={upDateAlbumList} />
        </main>
        </>
    )
}

export default Main