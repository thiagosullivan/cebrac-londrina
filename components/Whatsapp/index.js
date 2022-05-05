import React from 'react';
import Image from 'next/image';
import WhatsappLogo from '../../assets/whatsapp-plugin-icon.png';
import { WhatsappContainer } from './style';

function Whatsapp() {
  return (
    <WhatsappContainer>
      <a
        href="http://api.whatsapp.com/send?1=pt_BR&amp;phone=554330268888"
        data-number="4330268888"
        data-auto-text="CHAME AGORA!"
        data-ga-label="Cebrac Londrina"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src={WhatsappLogo}
          width={50}
          height={50}
          alt="Whatsapp"
        />
      </a>
    </WhatsappContainer>
  )
}

export default Whatsapp