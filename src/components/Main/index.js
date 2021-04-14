import React, {useState} from 'react'

import {CardList, AddAlbum, Header} from '..'

import album_data from '../../data'

function Main(){

    const [albumList, setAlbumList] = useState(album_data)

    function upDateAlbumList(newData){
        const newList = [...albumList, newData]
        setAlbumList(newList)
    }

    return (
        <>
        <main>
            <CardList albumList={albumList} />
            <AddAlbum upDateAlbumList={upDateAlbumList} />
        </main>
        </>
    )
}

export default Main