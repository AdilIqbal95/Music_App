import React, {useState} from 'react'


function Like(){
    const [toggle, setToggle] = useState(false)
    
    function handleClick(e) {
      setToggle(currentValue => !currentValue)
      
    }
  
  
    return (
      <>
          <button onClick={handleClick} style={{background:toggle? 'green':'grey'}}>Like</button>
      </>
    )
}


export default Like;