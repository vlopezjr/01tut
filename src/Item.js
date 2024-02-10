import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const Item = ({item, handleCheck, handleDelete}) => {
  return (
    <li key={item.id} className='item'>
        <input 
            type='checkbox'
            checked={item.checked}
            onChange={()=> handleCheck(item.id)}
        />
        <label
            style={(item.checked) ? {textDecoration: 'line-through'} : null}
            onDoubleClick={()=> handleCheck(item.id)}
        >{item.name}</label>
        <FaTrashAlt 
            onClick={() => handleDelete(item.id)}
            role='button' 
            tabIndex="0" 
            aria-label={`Delete ${item.name}`}
        />
    </li>
  )
}

export default Item
