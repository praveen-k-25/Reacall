 import React from 'react'
import ListItem from './ListItem'
 
 const Content = ({fet}) => {
   return (
     <div>
        <ul>
            {
                fet.map((item)=>(
                    <ListItem
                        item = {item}
                    />)
                )
            }
        </ul>
        
     </div>
   )
 }
 
 export default Content