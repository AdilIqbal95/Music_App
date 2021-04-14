import React, {useState} from 'react'

import {CardList, AddAlbum, Header, Api} from '..'

import album_data from '../../data'


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
            <Api />
        </main>
        </>
    )
}

export default Main