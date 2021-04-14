import React from 'react'
import { BackButton } from '..'

function Header(){
    return (
        <header>
          <BackButton />
          <h1 aria-label="title">Rolling Stone - Top 10 greatest albums</h1>
        </header>
    )
}


export default Header;