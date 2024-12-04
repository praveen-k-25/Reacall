import {useState} from 'react';
import ItemsList from './ItemsList';
    /* const name = ["earn","grow","give"]; */
    
    // ----------------------------------------------------------------
/*     function handleNameChange(){
        const int = Math.floor(Math.random()*3);
        console.log(name[int]);
        setNamee(name[int]);
    }
    const handleClick2 = (e)=>{
        console.log(e);
        console.log(e.target);
    }
    const handleClick = (name)=>{
        console.log(`Thanks for the Subscription ${name}`); */

    // --------------------  useState HOOKS ---------------------

   /*  function name1(){
        return console.log("visit.....");
        
    }
    const [count,setCount] = useState(99);
    const [namee,setNamee] = useState("earn");

    function decrement(){
        setCount((count) => {return count - 1});
        setCount((count) => {return count - 1});
        setCount((count) => {return count - 1});
        setCount(count - 1);
    }
    function increment(){
        setCount((count) => {return count + 1});
        setCount((count) => {return count + 1});
        setCount((count) => {return count + 1});
        setCount(count +1);
    } */
 
    // ---------------- LIST AND KEYS --------------
    const Content = ({items,setItems,handleCheck,deleteItem}) => {
  return (
    <>
        { items.length ? (
           <ItemsList className="itemList"
                items = {items}
                /* setItems = {setItems} */
                handleCheck = {handleCheck}
                deleteItem = {deleteItem}
           />
            ) : ( 
                <p>The List Is Empty</p>
            )
        }
    </>
  )
}


export default Content

// ------------  USESTATE ------------------
/* <div className='fl'>
            <p>Let's {namee} Money</p>    
             <button onClick={()=>handleClick("praveen")}>Subscribe</button> 
            <button className='volume' onClick={()=>handleNameChange()}>CLICK</button>
            <div className='volume'>
                <button onClick={()=>increment()}>+</button>
                <span >{count}</span>
                <button onClick={()=>decrement()} >-</button>
            </div>
        </div> */