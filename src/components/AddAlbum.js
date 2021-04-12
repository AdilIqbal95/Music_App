import React from 'react'

function AddAlbum(props){
    return (
        <div>
            <h2>Add your own!</h2>
            <form>
                <label HTMLfor="album">Album:</label>
                <input type="text" name="album" id="album"/>

                <label HTMLfor="artist">Artist:</label>
                <input type="text" name="artist" id="artist"/>

                <label HTMLfor="image">Cover image url:</label>
                <input type="text" name="image" id="image"/>
                
                <label HTMLfor="producer">Producer:</label>
                <input type="text" name="producer" id="producer"/>

                <label HTMLfor="year">Year:</label>
                <input type="number" name="year" id="year"/>

                <input type="submit" name="submit" id="submit" value="submit"/>
            </form>
        </div>
    )
}


export default AddAlbum;