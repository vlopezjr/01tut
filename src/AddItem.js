import {useRef} from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
    const inputRef = useRef()

  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='addItem'>Add Item</label>
        <input 
            required 
            ref={inputRef}
            type='text' 
            id='addItem' 
            placeholder='Add Item' 
            autoFocus
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
        />
        <button 
            type='submit' 
            aria-label='Add Item' 
            onClick={() => inputRef.current.autoFocus}
        ><FaPlus /></button>
    </form>
  )
}

export default AddItem
