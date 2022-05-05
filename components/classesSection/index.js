import React from 'react'
import Adm from '../Adm'
import Cdd from '../Cdd'
import Eng from '../Eng'
import Fmc from '../Fmc'
import Log from '../Log'
import Mcc from '../Mcc'
import Pbb from '../Pbb'
import { ClassesContainer } from './style'

function ClassesSection() {
  return (
    <ClassesContainer>
      <Adm />x
      {/* <Fmc /> */}
      <Eng />x
      <Cdd />x
      <Log />x
      <Mcc />x
      <Pbb />x
    </ClassesContainer>
  )
}

export default ClassesSection