import React from 'react'

const Toggle = ({dark,setDark}) => {
  return (
    <div>
        <button onClick={()=> setDark(!dark)}>Toggle Text Color</button>
    </div>
  )
}

export default Toggle