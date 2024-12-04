import react from'react'
import { useRef } from 'react';


const Additem = ({newItem,setNewItem,handleSubmit})=>{
    const inputRef = useRef()
    return(
        <form className='addForm'  onSubmit={handleSubmit}>
            <label htmlFor='formInput' id='formLabel'>Add Item</label>
            <input
            ref={inputRef}
                type='text'
                placeholder='Add Item'
                id='formInput'
                autoFocus
                required
                value={newItem} // Bind the input field value to newItem
                onChange={(e) => setNewItem(e.target.value)}            
            />
            <button 
                type='submit' 
                aria-label='Add Item' 
                className='formButton'
                onClick={()=>inputRef.current.focus()}
            > + </button>
        </form>
    ) 
}
export default Additem;