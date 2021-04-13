import React, {useState} from 'react'

function AddAlbum(props){
    const [album, setAlbum] = useState('')
    const [artist, setArtist] = useState('')
    const [image, setImage] = useState('')
    const [producer, setProducer] = useState('')
    const [year, setYear] = useState('')


    function handleSubmit(e){
        e.preventDefault()
        props.upDateAlbumList({album, artist, image, producer, year})
        setAlbum('')
        setArtist('')
        setImage('')
        setProducer('')
        setYear('')
    }

    function handleInput(e, inputToSet){
        inputToSet(e.target.value)
    }


    return (
        <div>
            <h2>Add your own!</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="album">Album:</label>
                <input onChange={(event) => handleInput(event, setAlbum)} type="text" name="album" id="album" value={album}/>

                <label htmlFor="artist">Artist:</label>
                <input onChange={(event) => handleInput(event, setArtist)} type="text" name="artist" id="artist" value={artist}/>

                <label htmlFor="image">Cover image url:</label>
                <input onChange={(event) => handleInput(event, setImage)} type="text" name="image" id="image"  value={image}/>
                
                <label htmlFor="producer">Producer:</label>
                <input onChange={(event) => handleInput(event, setProducer)} type="text" name="producer" id="producer" value={producer}/>

                <label htmlFor="year">Year:</label>
                <input onChange={(event) => handleInput(event, setYear)} type="number" name="year" id="year" value={year}/>

                <input type="submit" name="submit" id="submit" value="submit"/>
            </form>
        </div>
    )
}


export default AddAlbum;