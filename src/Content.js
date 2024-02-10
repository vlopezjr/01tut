

import ItemList from './ItemList'

const Content = ({items, setItems, handleCheck, handleDelete}) => {

    const EmptyList = () => <p style={{marginTop: '2rem'}}>Your list is empty.</p>
    
  return (
    <main>
        {items.length ? (
            <ItemList 
                items={items} 
                handleCheck={handleCheck} 
                handleDelete={handleDelete} 
            />
            ) : (
                <EmptyList />
            )}
    </main>
  )
}

export default Content
