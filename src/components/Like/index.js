import React from 'react'


function Like(){
    function handleClick(e) {
      e.preventDefault();
      console.log('like button clicked')
    }
  
  
    return (
      <>
        <small id="like">
          <button onclick={handleClick}>Like</button>
        </small>
      </>
    )
}


export default Like;