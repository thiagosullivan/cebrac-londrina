import React from 'react';
import Image from 'next/image';
import WhatsappLogo from '../../assets/whatsapp-plugin-icon.png';
import { WhatsappContainer } from './style';

function Whatsapp() {
  return (
    <WhatsappContainer>
      <a
        href="http://api.whatsapp.com/send?1=pt_BR&amp;phone=5565992049504"
        data-number="65992049504"
        data-auto-text="CHAME AGORA!"
        data-ga-label="Cebrac Cuiaba"
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