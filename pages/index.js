import Head from 'next/head'

import Header from '../components/header'
import HeroSection from '../components/heroSection'
import RowSection from '../components/rowSection'
import ClassesSection from '../components/classesSection'
import RatingSection from '../components/rating'
import FooterSection from '../components/footer'
import Whatsapp from '../components/Whatsapp'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cebrac Unidade de Londrina</title>
        <link rel="icon" href="/favicon.ico" />
        {/* Primary Meta Tags */}        
        <meta name="title" content="Cebrac Unidade de Londrina" />
        <meta name="description" content="Cursos Unidade Londrina. Prepare-se para o mercado de trabalho com os melhores cursos profissionalizantes do Brasil em 7 áreas de atuação!" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://londrinacebrac.com.br" />
        <meta property="og:title" content="Cebrac Unidade de Londrina" />
        <meta property="og:description" content="Cursos Unidade Londrina. Prepare-se para o mercado de trabalho com os melhores cursos profissionalizantes do Brasil em 7 áreas de atuação!" />
        <meta property="og:image" content="https://raw.githubusercontent.com/thiagosullivan/cuiaba-cebrac/main/assets/cebrac-img-metatag.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://londrinacebrac.com.br" />
        <meta property="twitter:title" content="Cebrac Unidade de Londrina" />
        <meta property="twitter:description" content="Cursos Unidade Londrina. Prepare-se para o mercado de trabalho com os melhores cursos profissionalizantes do Brasil em 7 áreas de atuação!" />
        <meta property="twitter:image" content="https://raw.githubusercontent.com/thiagosullivan/cuiaba-cebrac/main/assets/cebrac-img-metatag.jpg"></meta>
      </Head>

      <Header />
      <main>
        <HeroSection />
        <RowSection />
        <ClassesSection />
        <RatingSection />
      </main>
      <Whatsapp />
      <FooterSection />
    </div>
  )
}
