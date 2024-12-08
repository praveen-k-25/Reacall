import React, { useEffect, useState } from 'react'
import Header from './Header'
import Content from './Content'
import './App.css';

const App = () => {
    const POST_URL = "https://jsonplaceholder.typicode.com/posts";
    const COMMENT_URL = "https://jsonplaceholder.typicode.com/comments";
    const USER_URL = "https://jsonplaceholder.typicode.com/users";
    const [fet,setfet] = useState([])

    useEffect(()=>{
        handleClick(USER_URL);
    },[])

    const handleClick = async (req_url)=>{
        
            const response = await fetch(req_url);
            console.log(response);
            
            if(!response.ok) throw Error("Something is Wrong")
            const listItems = await response.json();
        console.log(listItems);
        
            setfet(listItems);
    }

  return (
    
    <div className='App'>
        <Header
        POST_URL = {POST_URL}
        COMMENT_URL = {COMMENT_URL}        
        USER_URL = {USER_URL}
        handleClick = {handleClick}
        />
        <Content
            fet = {fet}
        />
    </div>
    
  )
}

export default App