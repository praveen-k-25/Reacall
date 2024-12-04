import React, { useState } from 'react'
import Square from './Square'
import Input from './Input'
import Toggle from './Toggle';
import './ProjectApp1.css'

const ProjectApp1 = () => {
  const [color,setColor] = useState('');
  const [hex,setHex] = useState('')
  const [dark,setDark] = useState(true);

  return (
    <div className='ProjectApp1'>
      <Square
        color = {color}
        hex = {hex}
        dark = {dark}

      />
      <Input
        color = {color}
        setColor = {setColor}
        setHex = {setHex}
      />
      <Toggle
        dark = {dark}
        setDark = {setDark}
      />
    </div>
  )
}

export default ProjectApp1