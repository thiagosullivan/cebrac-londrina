import Link from 'next/link'
import React from 'react'
import { NavHead } from './style'


function NavHeaderDesktop() {
  return (
    <NavHead>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <a href="#adm">Assistente<br/>Administrativo</a>
        </li>
        {/* <li>
          <a href="#fmc">Atendente de<br/>Farmácia</a>
        </li> */}
        <li>
          <a href="#eng">Cebrac<br/>English</a>
        </li>
        <li>
          <a href="#cdd">Cuidador</a>
        </li>
        <li>
          <a href="#log">Logística</a>
        </li>
        <li>
          <a href="#mcc">Manutenção de Celulares e<br/>Computadores</a>
        </li>
        <li>
          <a href="#pbb">Profissional de<br/>Beleza</a>
        </li>
      </ul>
    </NavHead>
  )
}

export default NavHeaderDesktop