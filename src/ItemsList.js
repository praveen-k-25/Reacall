import React from 'react'
import LineItem from './LineItem'

const ItemsList = ({items,handleCheck,deleteItem}) => {
  return (
    <ul>
           {items.map((item)=>
               <LineItem className="lineItem"
               item = {item}
               key={item.id}
               /* setItems = {setItems} */
               handleCheck = {handleCheck}
               deleteItem = {deleteItem}
               />
           )}
       </ul>
  )
} 

export default ItemsList 