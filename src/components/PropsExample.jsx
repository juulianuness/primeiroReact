import React from 'react'

const PropsExample = ({nome, genero}) => {
  return (
    <div>
        <h3>Série {nome}</h3>
        <p> do genero {genero} </p>
    </div>
  )
}

export default PropsExample
