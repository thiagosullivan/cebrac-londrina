import React from 'react'
import Image from 'next/image';

import { TitleClassContainer } from './style'

function TitleClass({title, imageUrl, classCss}) {
  return (
    <TitleClassContainer>
      <div className='img__title_class'>
        <Image
          src={imageUrl}
          width={100}
          height={100}
          alt="Icone"
        />
      </div>
      <h2 className={classCss}>{title}</h2>
    </TitleClassContainer>
  )
}

export default TitleClass