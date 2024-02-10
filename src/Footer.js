import React from 'react'

const Footer = ({itemCount}) => {
    const today = new Date()

  return (
    <footer>
      <p>{itemCount} List {itemCount === 1 ? 'Item' : 'Items'}</p>
    </footer>
  )
}

export default Footer
