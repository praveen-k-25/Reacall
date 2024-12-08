 import React from 'react'
 
 const Header = ({POST_URL,COMMENT_URL,USER_URL,handleClick}) => {
   return (
     <div className='header'>
            <button
                className='button'
                
                onClick={()=>handleClick(USER_URL)}
            
            > user</button>
            <button
                className='button'
                onClick={()=>handleClick(COMMENT_URL)}
            > comments</button>
            <button
                className='button'
                onClick={()=>handleClick(POST_URL)}
            >posts</button>

     </div>
   )
 }
 
 export default Header