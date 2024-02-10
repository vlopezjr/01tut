import {useState, useEffect} from 'react'
import './App.css'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import AddItem from './AddItem'
import SearchItem from './SearchItem'

function App() {
  const API_URL = 'http://localhost:8000/items'

  const [items, setItems] = useState([])
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')


useEffect(()=>{
  const fetchItems = async () => {
    try{
      const response = await fetch(API_URL)
      const listItems = await response.json()
      console.log("items", listItems)
      if(listItems) {
        setItems(listItems)
      }
      
    }
    catch(err){
      console.log(err.stack)
    }
  }
  (async () => await fetchItems())()

}, [])




const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked} : item)
    
    setItems(listItems)
}

const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems)
}

const addItem = (itemName) => {
  const id = items.length ? items[items.length - 1].id + 1 : 1
  const myNewItem = {id, checked: false, name: itemName}
  const listItems = [...items, myNewItem]
  setItems(listItems)
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
