import React from 'react'
import CardsRating from './cardsRating'
import { RatingSectionContainer } from './style'
import {ratingData} from './rating-data';

function RatingSection() {
  return (
    <RatingSectionContainer>
      <div className='rating__title'>
        <h2>Avaliação dos alunos</h2>
        <p>O que nossos alunos têm a dizer a respeito das aulas no <span>cebrac</span>:</p>
      </div>
      <div className='rating__cards_container'>
        {ratingData.map((data, index) => {
          return (
            <CardsRating
              key={index}
              studantImg={data.studantImg}
              studantName={data.studantName}
              studantRole={data.studantRole}
              studantStars={data.studantStar}
              studantComment={data.studantComment}
            />
          )
        })}
      </div>
    </RatingSectionContainer>
  )
}

export default RatingSection