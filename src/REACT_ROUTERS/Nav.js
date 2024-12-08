import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const Nav = ({search,setSearch,toggle}) => {
    const ulRef = useRef(null);

  useEffect(() => {
    const ul = ulRef.current;
  
    
 
    if (!ul) return; // Ensure the element exists

    const handleWheel = (e) => {
      e.preventDefault(); // Prevent vertical scrolling
      ul.scrollLeft += e.deltaY; // Horizontal scroll using deltaY
    };

    ul.addEventListener('wheel', handleWheel);

    // Cleanup listener when component unmounts
    return () => {
      ul.removeEventListener('wheel', handleWheel);
    };
  }, []);

  console.log(document.querySelector('.ul'));
  console.log(toggle);
  return (
    <nav className='nav'>
        <form className="searchForm" onSubmit={(e)=> e.preventDefault()}>
            <label htmlFor='search'>Search Posts</label>
            <input 
                type='text'
                placeholder='Search Posts'
                id='search'
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
            />
        </form>
        <ul ref={ulRef} style={{
            display: toggle ? 'none' :'flex',
            }} className='ul' aria-hidden={toggle}>
            <li className='nav-list'>
                <Link className='anchor' to='/'>Home</Link>
            </li>
            <li className='nav-list'>
                <Link className='anchor' to='/post'>Post</Link>
            </li>
            <li className='nav-list'>
                <Link className='anchor' to='/about'>About</Link>
            </li>
            
        </ul>
    </nav> 

  )
}

export default Nav