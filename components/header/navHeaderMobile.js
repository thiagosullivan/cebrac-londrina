import Link from 'next/link';
import React, { useState } from 'react';
import { NavHeadMobile, NavHeadMobileCont } from './style';
import { FaBars, FaTimes } from 'react-icons/fa';


function NavHeaderMobile() {

  const [ openMenu, setOpenMenu ] = useState(false);
  const showMenu = () => {
    setOpenMenu(!openMenu)
  }  

  return (

    <NavHeadMobile>
      <div className='menu__mobile_ham'>
        <FaBars
          onClick={showMenu}
        />
      </div>
      <NavHeadMobileCont
        className={`${openMenu ? 'header_mobile_active' : '' }`}
      >
        <div
          className='close_header_mobile'
          onClick={showMenu}
        >
          <FaTimes />
        </div>
        <ul>
          <li>
            <Link href="/">
              <a onClick={showMenu}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/#adm">
              <a onClick={showMenu}>Assistente<br/>Administrativo</a>
            </Link>
          </li>
          <li>
          <Link href="/#fmc">
            <a onClick={showMenu}>Atendente de<br/>Farmácia</a>
          </Link>
          </li>
          <li>
            <Link href="#eng">
              <a onClick={showMenu}>Cebrac<br/>English</a>            
            </Link>
          </li>
          <li>
            <Link href="#cdd">
              <a onClick={showMenu}>Cuidador</a>
            </Link>
          </li>
          <li>
            <Link href="#log">
              <a onClick={showMenu}>Logística</a>
            </Link>
          </li>
          <li>
            <Link href="#mcc">
              <a onClick={showMenu}>Manutenção de Celulares e<br/>Computadores</a>
            </Link>
          </li>
          <li>
            <Link href="#pbb">
              <a onClick={showMenu}>Profissional de<br/>Beleza</a>
            </Link>
          </li>
        </ul>
      </NavHeadMobileCont>
    </NavHeadMobile>
  )
}

export default NavHeaderMobile