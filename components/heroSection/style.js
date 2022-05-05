import styled from "styled-components";

export const HeroContainer = styled.section`
  
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.blueTwo};

  .banner__hero_img {
    max-width: 1260px;
    min-width: 850px;
    width: 100%;
  }

  @media (max-width: 1200px) {
    .banner__hero_img {
      min-width: 750px;
    }
  }

  @media (max-width: 1100px) {
    .banner__hero_img {
      min-width: 660px;
    }
  }

  @media (max-width: 980px) {
    flex-direction: column;
  }

  @media (max-width: 550px) {
    .banner__hero_img {
      min-width: 600px;
    }
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  
  width: 100%;
  max-width: 600px;
  padding: 1rem 3rem;
  background: ${({ theme }) => theme.blueTwo};
  position: relative;

  .disabled-btn {
    cursor: not-allowed;    
  }
  .disabled-input {
    pointer-events: none !important;
  }

  @media (max-width: 1650px) {
    max-width: 550px;
  }

  @media (max-width: 1500px) {
    max-width: 500px;
    padding: 1rem 2rem;
  }

  @media (max-width: 1400px) {
    max-width: 450px;
    padding: 1rem;
  }

  @media (max-width: 1300px) {
    max-width: 400px;
  }

  @media (max-width: 1100px) {
    max-width: 325px;
  }

  @media (max-width: 980px) {
    max-width: 700px;
    padding: 3rem 1rem;
  }

  p {
    color: #ffffff;
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 1rem;

    @media (max-width: 550px){
      font-size: 1.5rem;
    }
  }

  input {
    height: 50px;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.grayOne};
    margin: .5rem 0;
    font-family: 'Work Sans', sans-serif;
    padding-left: 1rem;
    color: ${({ theme }) => theme.grayTwo};
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.grayTwo};
    }
  }

  select {
    height: 50px;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.grayOne};
    margin: .5rem 0;
    font-family: 'Work Sans', sans-serif;
    padding-left: 1rem;
    color: ${({ theme }) => theme.grayTwo};
    outline: none;
    background-color: ${({ theme }) => theme.white};

    &::placeholder {
      color: ${({ theme }) => theme.grayTwo};
    }
  }

  button {
    height: 50px;
    color: ${({ theme }) => theme.blueTwo};
    font-size: 1.2rem;
    font-weight: bold;
    font-family: 'Work Sans', sans-serif;
    background: ${({ theme }) => theme.blackOne};
    border: 2px solid ${({ theme }) => theme.blackOne};
    cursor: pointer;
    transition: all 150ms ease-in;
    margin-top: 1rem;
    border-radius: 5px;

    &:hover {
      background: ${({ theme }) => theme.blueTwo};
      color: ${({ theme }) => theme.blackOne};
    }
  }
`