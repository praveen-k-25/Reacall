import React from 'react'

const LineItem = ({item,handleCheck,deleteItem}) => {
  return (
    <li className='list' key={item.id} onClick={()=>handleCheck(item.id)}>
               <div className="divCheck" onClick={()=>handleCheck(item.id)}>
                <div>
                   <input 
                       type='checkbox' 
                       checked={item.checked} 
                       onChange={()=>handleCheck(item.id)}
                   /></div>
                   <label style={(!item.checked) ? {textDecoration:'line-through'}:null}>{item.item} </label>
               </div>
               <div>
                   <button className='listButton' onClick={(event)=>{
                        deleteItem(item.id);
                        event.stopPropagation();
                        
                    }}>Delete</button></div>
           </li>
  )
}
 
export default LineItem