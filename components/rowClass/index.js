import React from 'react'
import { RowClassContainer } from './style'

function RowClass({classCss}) {
  return (
    <RowClassContainer className={classCss}>
      <div className='row_class_cont'>
        <p>Cadastre-se para mais informações</p>
        <a href="#form">Saiba Mais</a>
      </div>
    </RowClassContainer>
  )
}

export default RowClass