import React from 'react'


function Like(){
    function handleClick() {
      console.log('like button clicked')
    }
  
  
    return (
      <>
        <small id="like">
          <button onClick={handleClick}>Like</button>
        </small>
      </>
    )
}


export default Like;