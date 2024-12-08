import React from 'react'

const Header = ({title,visible}) => {
  const display = document.querySelector(".header")
  
  return (
    <header className='header' onClick={()=>visible()}>
        <h1>{title}</h1>
    </header>
   
  )
}

export default Header