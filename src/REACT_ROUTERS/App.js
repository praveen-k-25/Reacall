 import React, { useEffect, useState } from 'react'
 import '../REACT_ROUTERS/App.css'
 import Header from './Header' 
 import Nav from './Nav' 
 import About from './About'
 import NewPost from './NewPost' 
 import PostPage from './PostPage' 
 import Post from './Post' 
 import Missing from './Missing'
import { Route, Routes, Link } from 'react-router-dom'
import Footer from './Footer'
import Home from './Home'
import api from "./api"


 const App = () => {
    const [posts,setPosts] = useState([])
    const[search,setSearch] = useState('');
    const [searchResults,setSearchResults] = useState([])
    const [toggle,setToggle] = useState(true)
    
    useEffect(()=>{
      const fetchPosts = async ()=>{
        try{
          const response = await api.get('/items');
          /* console.log(response); */
          
          setPosts(response.data)
        }catch(err){
          console.log(err.Message);
          
        }
      } 
      fetchPosts();
    },[])

    const visible = ()=>{
      (toggle === true) ? setToggle(false) : setToggle(true);
  
    }
    const handleSize = ()=>{
      console.log(window.innerWidth);
    }
    window.addEventListener("resize",()=>handleSize());
    
    

   return (
     <div className='App'>
        <Header title="Praveen Social Media" visible={visible}/>
        <Nav 
            search={search} 
            setSearch={setSearch}
            toggle={toggle}
        />
        <Routes>
            <Route path='/' element={<Home posts={posts} />}/>
            <Route path='/post'>
                <Route index element={ <NewPost/>}/>
                <Route path=':id' element={ <PostPage posts={posts}/>}/>
            </Route>
            
            <Route path='/about' element={<About/>}/>
            
            {/* 
            <PostPage/>
            
            <Missing/>
            <Footer/> */}
        </Routes>
        
     </div>
   )
 }
 
 export default App

 /* <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/postpage">PostPage</Link></li>
            </ul>
        </nav>
        <Routes>
            <Route path="/" element={<Header/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/newpost" element={<NewPost/>} />
            <Route path="/nav" element={<Nav/>} />
            <Route path="/postpage" element={<Footer/>}>
                <Route index element={<PostPage/>} />
                <Route path=":id" element={<Post/>}/>
                <Route path="newpost" element={<Post/>}/>
            </Route>
            
            
            <Route path="*" element={<Missing/>}/>
            
            
        </Routes> */