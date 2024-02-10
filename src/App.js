import {useState} from 'react'
import './App.css'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import AddItem from './AddItem'
import SearchItem from './SearchItem'

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')))

  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')

const SetAndSaveItems = (listItems) => {
  setItems(listItems)
  localStorage.setItem('shoppingList', JSON.stringify(listItems))
}
const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked} : item)
    
    SetAndSaveItems(listItems)
}

const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    SetAndSaveItems(listItems)
}

const addItem = (itemName) => {
  const id = items.length ? items[items.length - 1].id + 1 : 1
  const myNewItem = {id, checked: false, name: itemName}
  const listItems = [...items, myNewItem]
  SetAndSaveItems(listItems)
}

const handleSubmit = (e) => {
  e.preventDefault()

  if(!newItem)
    return
  console.log('newItem', newItem)
  addItem(newItem)
  setNewItem('')
}


  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} />
      <SearchItem search={search} setSearch={setSearch} />
      <Content 
        items={items.filter(item => ((item.name).toLowerCase()).includes(search.toLowerCase()))} 
        setItems={setItems} 
        handleCheck={handleCheck} 
        handleDelete={handleDelete} 
      />
      <Footer itemCount={items.length} />
    </div>
  );
}

export default App;
