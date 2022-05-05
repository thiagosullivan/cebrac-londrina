import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare, FaTwitterSquare } from 'react-icons/fa';

import { FooterBottom, FooterContainer, FooterTop } from './style'
import logoFooter from '../../assets/cebrac-logo.png';

function FooterSection() {
  return (
    <FooterContainer>
      <div className='footer__content'>
        <FooterTop>
          <div className="footer__logo">
            <Link href="/" passHref>
              <Image
                src={logoFooter}
                width={215}
                height={60}
                alt="Londrina Cebrac"
              />
            </Link>
          </div>
          <ul>
            <p>Cursos</p>
            <li>
              <Link href="/#adm">
                <a>Assistente Administrativo Completo</a>
              </Link>
              </li>
            {/* <li>
              <Link href="/#fmc">
                <a>Atendente de Farmácia</a>              
              </Link>
            </li> */}
            <li>
              <Link href="/#eng">
                <a>Cebrac English</a>
              </Link>
            </li>
            <li>
              <Link href="/#cdd">
                <a>Cuidador</a>
              </Link>
            </li>
            <li>
              <Link href="/#log">
                <a>Logística Completa</a>
              </Link>
            </li>
            <li>
              <Link href="/#mcc">
                <a>Manutenção de Celulares<br/>
                e Computadores</a>
              </Link>
            </li>
            <li>
              <Link href="/#pbb">
                <a>Profissional da Beleza</a>
              </Link>
            </li>
          </ul>
          <div className='footer__social_container'>
            <p>Redes Sociais</p>
            <div className='footer__social_links'>
              <a href='https://www.facebook.com/cebrac.unidadecuiaba/'>
                <FaFacebookSquare />
              </a>
              <a href="https://www.instagram.com/cebrac.cuiaba/">
                <FaInstagramSquare />
              </a>
              <a href="https://www.youtube.com/channel/UCIRwHwWL_B-pgkfoUFvoXGw">
                <FaYoutubeSquare />
              </a>
              <a href="#">
                <FaTwitterSquare />
              </a>
            </div>
          </div>
        </FooterTop>
      </div>
      <FooterBottom>
        <p>© 2022 <span>CEBRAC Londrina</span> - Desenvolvido por <span>Digital Cloud</span>.</p>
      </FooterBottom>
    </FooterContainer>
  )
}

export default FooterSection