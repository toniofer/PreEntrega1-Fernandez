import React from 'react'
import "./itemListContainer.css"

function ItemListContainer({greeting}) {
  return (
    <h1 className='tituloListado'>{greeting}</h1>
  )
}

export default ItemListContainer