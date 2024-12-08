import React from 'react'

const ListItem = ({item}) => {
    console.log(item);
    
  return (
        <li 
            key={item.id}
            className='list'            
        >
            {JSON.stringify(item)}
        </li>
  )
}

export default ListItem