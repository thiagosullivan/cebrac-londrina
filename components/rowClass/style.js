import styled from "styled-components";

export const RowClassContainer = styled.div`
  .row_class_cont {
    max-width: 1300px;
    width: 100%;
    margin: 0 auto;
    padding: 2rem 0;

    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Work Sans', sans-serif;

    @media (max-width: 850px) {
      flex-direction: column;
    }

    p {
      margin-right: 6rem;
      font-size: 2.1rem;
      color: #ffffff;
      font-weight: bold;

      @media (max-width: 980px) {
        margin-right: 2rem;
      }

      @media (max-width: 850px) {
        font-size: 1.5rem;
      }

      @media (max-width: 850px) {
        margin-right: 0;
        margin-bottom: 2rem;
        text-align: center;
      }
    }

    a {
      padding: 0.8rem 2.5rem;
      color: #ffffff;
      background-color: ${({ theme }) => theme.blackOne};
      border: 2px solid ${({ theme }) => theme.blackOne};
      transition: all 150ms ease-in;

      &:hover {
        background-color: transparent;
        color: ${({ theme }) => theme.blackOne};
      }

      @media (max-width: 850px) {
        padding: 0.6rem 2rem;
      }
    }
  }
`