import styled from "styled-components";

export const RatingSectionContainer = styled.section`
  font-family: 'Work Sans', sans-serif;

  .rating__title {
    margin-top: 6.2rem;
    margin-bottom: 5rem;
    padding: 0 1rem;

    h2 {
      color: ${({ theme }) => theme.blueOne};
      text-transform: uppercase;
      font-size: 2.1rem;
      text-align: center;
      margin-bottom: .2rem;
    }
    p {
      color: ${({ theme }) => theme.blackOne};
      font-size: 1.2rem;
      text-align: center;      
    }
  }

  .rating__cards_container {
    max-width: 1300px;
    width: 100%;
    margin: 0 auto 5rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 0 1rem;
  }
`

export const CardsRatingContainer = styled.div`
  max-width: 365px;
  padding: 4rem 2rem;
  box-shadow: 5px 5px 20px rgb(0 0 0 / 20%);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  margin: 1rem;

  h4 {
    color: ${({ theme }) => theme.blueOne};
    margin: .5rem 0 .2rem;
  }
  span {
    font-size: 12px;
    margin-bottom: 1rem;
  }
  p {
    color: ${({ theme }) => theme.blackOne};
    margin-top: 1rem;
    font-family: 'Merriweather', serif !important;
    text-align: center;
  }
`;