import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import {useState,useEffect} from 'react';
import Additem from './Additem';
import SearchItem from './SearchItem';
import apiRequest from './apiRequest';

function App() {
  const API_URL = "C:\Users\kvetr\Desktop\praveen\praveen\data\db.json"
  const [items,setItems] = useState([]); 
  const [newItem, setNewItem] = useState('');
  const [search,setSearch] = useState('');
  // this use state for error handling.....
  const [fetchError,setFetchError] = useState('');
  const [isLoading,setIsLoading] = useState(true);

  useEffect(()=>{
    const fetchItems = async()=>{
      try{
        const response = (await fetch(API_URL));
        if(!response.ok) throw Error("Data Not Found");
        const listItems = await response.json();
        console.log(listItems.items);
        
        setItems(listItems.items);
        setFetchError(null);
      } catch(err){
        setFetchError(err.message)
      } finally{
        setIsLoading(false)
      }
    }
    setTimeout(()=>{
      (async ()=> await fetchItems())()
    },3000)
    
  },[])


  const handleCheck = async (id) =>{
      const listItems = items.map((item) => item.id === id ?
      {...item,checked : !item.checked}:item)
      setItems(listItems)
      /* localStorage.setItem("to-do-list",JSON.stringify(listItems)); */

      const myItem = listItems.filter((item)=> item.id === id  )

      const updateOption = {
        method :'PATCH',
        headers : {
          'Content-Type':'application/json'
        },
        body :JSON.stringify(myItem[0].checked)
      }

      const reqUrl = `${API_URL}/${id}`;
      const result = await apiRequest(reqUrl,updateOption,null)
      if(!result) setFetchError(result)
  }

  const deleteItem = async(id)=>{
      const listItems = items.filter((item) =>item.id !== id)
      setItems(listItems);
      /* console.log(listItems); */
      /* localStorage.setItem("to-do-list",JSON.stringify(listItems)); */
      const deleteOptions = {
        method:'DELETE'
      }
      const reqUrl = `${API_URL}/${id}`
      const result = await apiRequest(API_URL,deleteOptions);
      if(result) setFetchError(result)
  }

const addItem = async (newItem)=>{
  const addNewItem = {id: ((items.length === 0) ? 1:items[items.length-1].id+1),checked:true,item:newItem};
  const listItems = [...items,addNewItem];
  setItems(listItems)
  console.log(JSON.stringify(addNewItem));
  
  /* localStorage.setItem("to-do-list",JSON.stringify(listItems)); */
 // API update -  CRUD Operation ---> CREATE operation
  const postOptions = {
    method: 'POST',
    headers : {
      'Content-Type':"application/json",
    },
    body:JSON.stringify(addNewItem)
  }
  const result = await apiRequest(API_URL,postOptions);
  console.log(result);
  
  if(result) setFetchError(result);

}

const handleSubmit = (e)=>{
  e.preventDefault();
  console.log('submitted');
  if( ! newItem) return;
  console.log(newItem);

  addItem(newItem);
  setNewItem('')
}
  return (
    <div className='App'>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element ={<Home/>}/>
      </Routes>
      <Header title="Praveen List"/>
      <Additem className='additem'
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
      />
      <SearchItem
        search = {search}
        setSearch = {setSearch}
      />
      <main className='main'>
        {isLoading && <p>{ `Loading items....`}</p>}
        {fetchError && <p>{`Error : ${"Data Not Recieved"}`}</p>}
        {
          !isLoading && !fetchError &&
          <Content className="content"
            items = {items.filter(item => (item.item).toLowerCase().includes(search.toLowerCase()))}
            /* setItems = {setItems} */
            handleCheck = {handleCheck}
            deleteItem = {deleteItem}
          />
        }
      </main>
      
      <Footer className='footer'
        length = {items.length}
      />
    </div>
  );
}

export default App;

/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Learn React</a>
      </header>
    </div> */
