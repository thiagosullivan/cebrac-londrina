import React from 'react';
import Image from 'next/image';

import bannerHero from '../../assets/banner-1.webp';


import { HeroContainer } from './style';
import FormHero from './formHero';

function HeroSection() {
  return (
    <HeroContainer>
      <div className='banner__hero_img'>
        <Image
          src={bannerHero}
          alt="banner"
        />
      </div>
      <FormHero />
    </HeroContainer>    
  )
}

export default HeroSection