import logo from './logo.svg';
import './App.css';
import React,{useState} from "react"
import List from './List';
import Alert from './Alert';

function App() {
  //to take item in an input field
  const [item,setItem]=useState('');
  //To display items
  const[ListItems,setListItems]=useState([])
  //to edit item
  const[isEdit,setisEdit]=useState(null);
  // In alert show the activity done by u within the item
  const[alert,setAlert]=useState({show:true,msg:'changed',type:'success'})
  const handleSubmit=(e)=>{
    e.preventDefault();
    // if item is empty or you can say item is false
    if(!item){
      //display alert
    }
    else if(item && isEdit){
      //deal with edit
    }
    else
    {
      //ADD ITEM
      //Show alert
      let newItem={id: new Date().getTime().toString(),
      title:item}
      
      setListItems([...ListItems,newItem]);
      setItem(' ');
    }
    
  }
  return (
  <section className='section-center'>
    <form className='grocery-form'>
      {/* //setting alert property equals true here */}
    {alert.show && <Alert alert={...alert}></Alert>}
    <h3> Grocer-shop</h3>
    <div className='form-control'>
    <input type="text" className='grocery'
    value={item}
    onChange={(e)=>{setItem(e.target.value)}}></input>
    
   
    <button className='submit-btn'
    onClick={handleSubmit}>
    {isEdit?"EDIT":"ADD "}
    </button>
    </div>
    </form>
    {ListItems.length>0 &&
   
  <div className='grocery-container'>
    <List items={ListItems}/>
    <button className='clear-btn' onClick={()=>setListItems([])}>
      Clear Items</button>
  </div>
    
}
  </section>
  );
}

export default App;
