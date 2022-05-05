import React, {useEffect} from 'react'
import Image from 'next/image';
import Link from 'next/link'

import { BottomHead, HeaderContainer, TopHead } from './style';
import NavHeader from './navHeader';

import prFlag from '../../assets/pr-bandeira.jpg';
import headLogo from '../../assets/cebrac-logo.png';
import NavHeaderDesktop from './navHeader';
import NavHeaderMobile from './navHeaderMobile';

function Header() {

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  const isSticky = (e) => {
    const headerMenu = document.querySelector('#bottom__header');
    const scrollTop = window.scrollY;
    scrollTop >= 28 ? headerMenu.classList.add('is-sticky') : headerMenu.classList.remove('is-sticky');
  }

  return (
    <HeaderContainer>
      <TopHead>
        <div className='head__flag'>
          <Image
            src={prFlag}
            width={30}
            height={20}
            alt="Icone"
          />
        </div>
        <p>Londrina - PR</p>
      </TopHead>
      <BottomHead
        id='bottom__header' 
      >
        <div className='bottom__header__cont'>
          <div className='header__logo'>
            <Link href="/" passHref>
              <Image
                src={headLogo}
                width={145}
                height={40}
                alt="Icone"
              />
            </Link>
          </div>
          <NavHeaderDesktop />
          <NavHeaderMobile />
        </div>
      </BottomHead>
    </HeaderContainer>
  )
}

export default Header