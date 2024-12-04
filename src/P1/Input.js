import React from 'react'
const Input = ({color,setColor,setHex}) => {
  return (
    <div className='input'>
        
            <input 
                autoFocus
                type='text'
                placeholder='Add Color name'
                value={color}
                onChange={(e)=>{
                    setColor(e.target.value);
                }}
            />
        
    </div>
  )
}

export default Input