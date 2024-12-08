import React from 'react'
import { useParams } from 'react-router-dom'

const NewPost = () => {
  return (
    <form className="formPost" >
      <h1>New Post</h1>
      <label htmlFor="title">Title:</label>
       <input 
        type="text" 
        id="title" 
        placeholder='title'
      />
    </form>
  )
}

export default NewPost