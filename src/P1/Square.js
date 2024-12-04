import React from 'react'

const Square = ({color,hex,dark}) => {
  return (
    <section
      className='square'
      style={{
        backgroundColor:color,
        color: dark ? "#000" : "#fff"
      }}
    >
       <p>{color ? color : "Empty Value"}</p> 
       <p>{hex ? hex : null}</p>
    </section>
  )
}
export default Square