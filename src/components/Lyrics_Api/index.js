import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Api = ({upDateParams}) => {
    const [artist, setArtist] = useState('');
    const [title, setTitle] = useState('');
    const [search, setSearch] = useState('')
    const [lyrics, setLyrics] = useState('');
    
    function handleSubmit(e){
      e.preventDefault()
      setSearch({artist: artist, title: title})
      setArtist('')
      setTitle('')

  }

    function handleInput(e, inputToSet){
      inputToSet(e.target.value)
  }
    useEffect(() => {
      async function getLyrics() {
        try {
          let {data} = await axios.get(`https://api.lyrics.ovh/v1/${search.artist}/${search.title}`)
          console.log(data)
          setLyrics(data.lyrics);
        } catch (err) {
          console.warn(err);
          search ? setLyrics('cannot find that song') : null
        }

      }
      getLyrics()

    },[search])

    return (
      <div role="listitem">
        <h2>Lyrics Api</h2>
        
        <form onSubmit={handleSubmit}>
          <label htmlFor="Artist">Artist:</label>
          <input onChange={(event) => handleInput(event, setArtist)} type="text" name="Artist" id="Artist" value={artist} placeholder="Enter the name of an artist..."/>

          <label htmlFor="Title">Title:</label>
          <input onChange={(event) => handleInput(event, setTitle)} type="text" name="Title" id="Title" value={title} placeholder="Enter the name of a song..."/>

          <input type="submit" name="submit" id="submit" value="submit"/>
        </form>
        <p>{search.title} {search.artist && `by ${search.artist}`}</p>
        <p>{ lyrics }</p>
  
      </div>
    )
}

  

export default Api;

