import styled from "styled-components";

export const FooterContainer = styled.footer`
  box-shadow: -2px -2px 20px rgb(0 0 0 / 20%);

  .footer__content {
    max-width: 1300px;
    width: 100%;
    margin: 0 auto;
  }
`
export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem 1rem;

  .footer__logo {
    cursor: pointer;
  }

  p {
    font-weight: bold;
    text-transform: uppercase;
    color: ${({ theme }) => theme.blueOne};
    margin-bottom: 1.2rem;
  }

  ul {
    margin: 0;

    li {
      margin-bottom: 1rem;

      a {
        color: ${({ theme }) => theme.blueOne};
        transition: all 150ms ease-in;

        &:hover {
          color: ${({ theme }) => theme.blueTwo};
        }
      }
    }
  }


  @media (max-width: 710px){
    flex-direction: column;
    align-items: center;

    ul {
      margin: 1.5rem 0;
    }

    p {
      text-align: center;
    }

    li {
      text-align: center;
    }
  }

  .footer__social_container {

    .footer__social_links{

      a {
        font-size: 2.5rem;
        color: ${({ theme }) => theme.blueOne};
        transition: all 150ms ease-in;

        &:hover {
          color: ${({ theme }) => theme.blueTwo};
        }
      }
    }
  }
`
export const FooterBottom = styled.div`
  background-color: ${({ theme }) => theme.blackOne};
  color: #ffffff;
  text-align: center;
  padding: .5rem 0;
  font-family: 'Work Sans', sans-serif;
  
  span {
    font-weight: bold;
  }

  @media (max-width: 420px){
    font-size: 0.9rem;
  }
`