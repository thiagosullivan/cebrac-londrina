import styled from "styled-components";

export const TitleClassContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  padding-top: 4rem;

  .img__title_class {
    margin-right: 3.1rem;
  }

  @media (max-width: 980px){
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media (max-width: 660px){
    flex-direction: column;

    .img__title_class {
      margin-right: 0;
      margin-bottom: 1.5rem;
    }

    h2 {
      text-align: center;
    }
  }
`