import React, {useState} from 'react'


function Like(){
    const [toggle, setToggle] = useState(false)
    
    function handleClick(e) {
      setToggle(currentValue => !currentValue)
      
    }
  
  
    return (
      <>
        <small id="like">
          <button onClick={handleClick} style={{background:toggle? 'green':'grey'}}>Like</button>
        </small>
      </>
    )
}


export default Like;