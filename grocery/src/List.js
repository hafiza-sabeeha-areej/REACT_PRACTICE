import React from 'react'
import { FaEdit,FaTrash } from 'react-icons/fa'
const List = ({items}) => {
  
  return (
    <div className='grocery-list'>
       {
        items.map((item)=>{
 
          const{id,title}=items;
          
            return(
          <article key={items.id} className='grocery-item'>
          <p className='title'>{item.title}</p>
          <div className='btn-Container'>
            <button type="button" className='edit-btn'>
          <FaEdit/>
            </button>
            <button type="button" className='delete-btn'>
          <FaTrash/>
            </button>
            

          </div>
          </article>
          )
        })
       }
    </div>
  )
}

export default List
